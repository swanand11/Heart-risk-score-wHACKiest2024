from flask import Flask, jsonify
from flask_cors import CORS # type: ignore
import numpy as np
import random
app = Flask(__name__)
CORS(app)
def generate_ecg_waveform(duration=10, sampling_rate=500):
    time = np.linspace(0, duration, duration * sampling_rate)
    def pqrst(t):
        return (
            random.uniform(1.0, 1.5) * np.exp(-((t - 0.2) / 0.05) ** 2) +  # P wave
            random.uniform(-5.5, -4.5) * np.exp(-((t - 0.5) / 0.1) ** 2) +  # Q wave
            random.uniform(28.0, 32.0) * np.exp(-((t - 0.6) / 0.1) ** 2) +  # R wave
            random.uniform(-8.0, -7.0) * np.exp(-((t - 0.7) / 0.1) ** 2) +  # S wave
            random.uniform(0.7, 0.8) * np.exp(-((t - 1.0) / 0.2) ** 2)    # T wave
        )
    heart_rate = random.randint(60, 100) 
    beat_interval = 60 / heart_rate 
    ecg_signal = np.zeros_like(time)
    
    for start in np.arange(0, duration, beat_interval):
        cycle_time = time - start
        ecg_signal += pqrst(cycle_time % beat_interval)
    
    # Add noise to simulate real-world ECG
    noise = np.random.normal(0, random.uniform(0.03, 0.07), len(time))
    ecg_signal += noise
    
    return time, ecg_signal,heart_rate

@app.route('/generate_ecg')
def get_ecg():
    # Generate ECG data
    time, ecg_signal,heart_rate= generate_ecg_waveform(duration=10, sampling_rate=500)
    
    # Convert numpy arrays to lists and create data points
    data_points = [
        {"time": str(float(t)), "ecg": float(a)} 
        for t, a in zip(time, ecg_signal)
    ]
    
    return jsonify({
        "ecg_data": data_points,
        "heart_rate":heart_rate,
        "metadata": {
            "duration": 10,
            "sampling_rate": 500,
            "total_points": len(data_points)
        }
    })

if __name__ == '__main__':
    app.run(debug=True)
