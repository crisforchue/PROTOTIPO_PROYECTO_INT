import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const CO2Chart: React.FC = () => {
  const data = [
    { time: '0', co2: 400, target: 450 },
    { time: '1', co2: 600, target: 450 },
    { time: '2', co2: 750, target: 450 },
    { time: '3', co2: 350, target: 450 },
    { time: '4', co2: 800, target: 450 },
    { time: '5', co2: 650, target: 450 },
    { time: '6', co2: 750, target: 450 },
    { time: '7', co2: 300, target: 450 },
    { time: '8', co2: 500, target: 450 },
    { time: '9', co2: 550, target: 450 },
  ];

  return (
    <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
      <h3 className="text-lg font-semibold text-white mb-6">CO₂ Levels</h3>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              domain={[0, 1000]}
            />
            <Bar 
              dataKey="co2" 
              fill="#3B82F6"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
            <Bar 
              dataKey="target" 
              fill="#10B981"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-gray-400 text-sm">Current CO₂</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 text-sm">Target Level</span>
        </div>
      </div>
    </div>
  );
};

export default CO2Chart;