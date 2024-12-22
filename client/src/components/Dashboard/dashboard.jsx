import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ECGchart } from './ecgchart';
import Navbar from "../Navbar/Navbar";
import { useTheme } from "../Themecontext"; // Assuming Themecontext provides theme context
import ParticlesComponent from "../bg"; // Import for dark mode
import ParticlesComponent1 from "../bg2";
import Footer from '../footer/Footer';
import "./dashboard.css";

const Dashboard = ({theme}) => {

    const [selectedRisk, setSelectedRisk] = useState('Low Risk');
    const [isECGFullscreen, setIsECGFullscreen] = useState(false);

    const riskData = {
        'High Risk': { value: 80, color: '#FF6F61' },
        'Medium Risk': { value: 50, color: '#FFCC00' },
        'Low Risk': { value: 20, color: '#4CAF50' },
    };

    const preventions = {
        30: [
            'Seek medical attention immediately: call your healthcare provider or visit the nearest medical center within 24 hours.',
            'Take your medications now: if prescribed, take your medications immediately to stabilize risk factors.',
            'Avoid stressful activities: stop any ongoing stressful or physically demanding activities right now.',
            'Prepare emergency contacts: save emergency medical contact numbers on your phone and share them with your family.',
            'Monitor your heart rate and BP: use a home device or visit a clinic to check your vitals today.',
        ],
        50: [
            'Call your doctor: schedule an appointment within the next 1–3 days.',
            'Monitor blood pressure & sugar levels: check your blood pressure and/or blood sugar today, if possible.',
            'Start walking today: go for a 10–15 minute walk immediately, unless advised otherwise by a doctor.',
            'Cut out high-sodium foods: remove processed foods like chips or canned soups from your kitchen immediately.',
            'Buy fresh vegetables: shop for fresh vegetables and fruits today.',
        ],
        20: [
            'Stick to regular habits: continue daily walks or other light physical activities.',
            'Drink water: immediately hydrate yourself with water if dehydrated.',
            'Limit junk food: reduce processed food in your next meal.',
            'Schedule routine check-up: book your next general health check-up within the next week.',
            'Get quality sleep: plan to get 7–8 hours of sleep tonight.',
        ],
    };

    const toggleECGFullscreen = () => {
        setIsECGFullscreen(!isECGFullscreen);
    };

    const currentRisk = riskData[selectedRisk];
    const currentPreventions = preventions[currentRisk.value];

    return (
       
           
            <>
            <Navbar /> {theme === "dark" ? <ParticlesComponent /> : <ParticlesComponent1 />}
            <div className="min-h-screen p-6">
  <div
    className={`dash-grid ${
      isECGFullscreen ? 'fixed top-0 left-0 right-0 bottom-0 z-50 bg-white' : ''
    }`}
  >
   
      {/* User Profile and Risk Assessment */}
      <Card className=" p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-16 h-16 text-xl text-white bg-blue-500 rounded-full">
            <span>A</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Age: 45 | Gender: Male
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="mb-4 text-lg font-semibold text-center">
            Risk Assessment
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={[{ name: selectedRisk, value: currentRisk.value }]}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill={currentRisk.color}
                label={({ value }) => `${value}%`}
              >
                <Cell fill={currentRisk.color} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 text-center">
            <h4 className="font-semibold">{selectedRisk}</h4>
            <p className="text-gray-600 dark:text-gray-300">
              {currentRisk.value}% covered
            </p>
          </div>
        </div>
      </Card>

      {/* ECG Graph */}
      <Card
        className={`graph p-4 shadow-md relative ${
          isECGFullscreen ? 'fixed inset-0 bg-white z-50' : ''
        }`}
      >
        <h3 className="mb-4 text-lg font-semibold text-center">ECG Graph</h3>
        <div onClick={toggleECGFullscreen}>
          <ECGchart />
        </div>
        {isECGFullscreen && (
          <button
            className="absolute px-4 py-2 text-white bg-red-500 rounded-lg top-4 right-4"
            onClick={(e) => {
              e.stopPropagation();
              toggleECGFullscreen();
            }}
          >
            Close
          </button>
        )}
      </Card>
   

    {/* Bottom Cards */}
      <Card className="p-4 transition-transform shadow-md hover:scale-105">
        <h3 className="text-lg font-semibold">Health Overview</h3>
        <ul className="mt-4 space-y-2">
          <li className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">Heart Rate</span>
            <span className="font-medium">72 BPM</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">Blood Pressure</span>
            <span className="font-medium">120/80 mmHg</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">Cholesterol</span>
            <span className="font-medium">190 mg/dL</span>
          </li>
        </ul>
      </Card>

      <Card className="p-4 transition-transform shadow-md hover:scale-105">
        <h3 className="text-lg font-semibold">Prevention Tips</h3>
        <ul className="mt-4 space-y-2">
          {currentPreventions.map((tip, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-300">
              {tip}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-4 transition-transform shadow-md hover:scale-105">
        <h3 className="mb-4 text-lg font-semibold text-center">Actions</h3>
        <Button variant="primary" className="w-full px-6 py-2 rounded-lg">
          <a href="/form"> Take Test</a>
        </Button>
      </Card>
    </div>
  </div>

<Footer theme={theme} />
</>
    );
};

export default Dashboard;
