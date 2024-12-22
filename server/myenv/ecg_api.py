from flask import Flask, jsonify, request
from flask_cors import CORS # type: ignore
import numpy as np
import random
from typing import Dict, List, Tuple

app = Flask(__name__)
CORS(app)

def generate_real_ecg_waveform(duration=10, sampling_rate=500, base_heart_rate=None):
    time = np.linspace(0, duration, duration * sampling_rate)
    
    def pqrst(t):
        return (
            random.uniform(1.0, 1.5) * np.exp(-((t - 0.2) / 0.05) ** 2) +  # P wave
            random.uniform(-5.5, -4.5) * np.exp(-((t - 0.5) / 0.1) ** 2) +  # Q wave
            random.uniform(28.0, 32.0) * np.exp(-((t - 0.6) / 0.1) ** 2) +  # R wave
            random.uniform(-8.0, -7.0) * np.exp(-((t - 0.7) / 0.1) ** 2) +  # S wave
            random.uniform(0.7, 0.8) * np.exp(-((t - 1.0) / 0.2) ** 2)    # T wave
        )
    
    heart_rate = base_heart_rate if base_heart_rate else random.randint(60, 100)
    beat_interval = 60 / heart_rate
    ecg_signal = np.zeros_like(time)
    
    for start in np.arange(0, duration, beat_interval):
        cycle_time = time - start
        ecg_signal += pqrst(cycle_time % beat_interval)
    
    noise = np.random.normal(0, random.uniform(0.03, 0.07), len(time))
    ecg_signal += noise
    
    return time, ecg_signal, heart_rate

def generate_ideal_ecg_waveform(time, heart_rate):
    beat_interval = 60 / heart_rate
    ideal_signal = np.zeros_like(time)
    
    def ideal_pqrst(t):
        return (
            1.2 * np.exp(-((t - 0.2) / 0.05) ** 2) +
            -5.0 * np.exp(-((t - 0.5) / 0.1) ** 2) +
            30.0 * np.exp(-((t - 0.6) / 0.1) ** 2) +
            -7.5 * np.exp(-((t - 0.7) / 0.1) ** 2) +
            0.75 * np.exp(-((t - 1.0) / 0.2) ** 2)
        )
    
    for start in np.arange(0, max(time), beat_interval):
        cycle_time = time - start
        ideal_signal += ideal_pqrst(cycle_time % beat_interval)
    
    return ideal_signal

def calculate_ecg_parameters(signal: np.ndarray, time: np.ndarray, sampling_rate: int) -> Dict:
    """Calculate ECG parameters needed for the heart disease model."""
    # Find R peaks
    r_peaks = []
    window_size = int(0.2 * sampling_rate)
    
    for i in range(window_size, len(signal) - window_size):
        if all(signal[i] > signal[j] for j in range(i-window_size, i+window_size)):
            r_peaks.append(i)
    
    # Calculate Max HR from R peaks
    if len(r_peaks) >= 2:
        rr_intervals = np.diff([time[i] for i in r_peaks])
        mean_rr = np.mean(rr_intervals)
        max_hr = int(60 / mean_rr)
    else:
        max_hr = 0

    # Calculate ST depression (Oldpeak)
    oldpeak = 0
    for peak_idx in r_peaks:
        # Look for ST segment (80ms after R peak)
        st_start = min(len(signal), peak_idx + int(0.08 * sampling_rate))
        st_end = min(len(signal), st_start + int(0.08 * sampling_rate))
        if st_end > st_start:
            baseline = np.mean(signal[peak_idx-int(0.1*sampling_rate):peak_idx])
            st_level = np.mean(signal[st_start:st_end])
            oldpeak = max(oldpeak, abs(baseline - st_level))

    # Determine ST_Slope
    st_slope = "Flat"  # Default value
    if len(r_peaks) > 0:
        for peak_idx in r_peaks:
            st_start = min(len(signal), peak_idx + int(0.08 * sampling_rate))
            st_end = min(len(signal), st_start + int(0.16 * sampling_rate))
            if st_end > st_start:
                st_segment = signal[st_start:st_end]
                if len(st_segment) > 1:
                    slope = np.polyfit(np.arange(len(st_segment)), st_segment, 1)[0]
                    if slope > 0.1:
                        st_slope = "Up"
                    elif slope < -0.1:
                        st_slope = "Down"

    # Determine RestingECG
    resting_ecg = "Normal"
    baseline = np.mean(signal)
    std_dev = np.std(signal)
    
    if oldpeak > 0.1:
        resting_ecg = "ST"
    elif np.max(np.abs(signal - baseline)) > 3 * std_dev:
        resting_ecg = "LVH"

    return {
        "MaxHR": max_hr,
        "Oldpeak": round(float(oldpeak), 2),
        "ST_Slope": st_slope,
        "RestingECG": resting_ecg
    }

# Original endpoint for ECG data
@app.route('/generate_ecg')
def get_ecg():
    time, real_ecg_signal, heart_rate = generate_real_ecg_waveform(duration=10, sampling_rate=500)
    ideal_ecg_signal = generate_ideal_ecg_waveform(time, heart_rate)
    
    # Calculate ECG parameters
    ecg_params = calculate_ecg_parameters(real_ecg_signal, time, 500)
    
    # Format data points for graph and heart disease parameters
    data_points = [
        {
            "time": str(float(t)),
            "real_ecg": float(r),
            "ideal_ecg": float(i)
        } 
        for t, r, i in zip(time, real_ecg_signal, ideal_ecg_signal)
    ]

    # Add heart disease parameters (MaxHR, Oldpeak, etc.)
    response_data = {
        "ecg_data": data_points,
        "heart_rate": heart_rate, 
        "Oldpeak": ecg_params["Oldpeak"],
        "ST_Slope": ecg_params["ST_Slope"],
        "RestingECG": ecg_params["RestingECG"]
    }

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
