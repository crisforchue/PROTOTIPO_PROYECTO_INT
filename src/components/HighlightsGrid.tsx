import React from 'react';
import { Activity, Sun, Droplets, Wind } from 'lucide-react';

const HighlightsGrid: React.FC = () => {
  const highlights = [
    {
      title: 'Particulate Matter',
      subtitle: '(PM2.5 / PM10)',
      icon: Activity,
      value: '📊',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'UV Index',
      subtitle: '',
      icon: Sun,
      value: 'UV',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'CO₂ Levels',
      subtitle: '',
      icon: Wind,
      value: '🏭',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Humidity',
      subtitle: '',
      icon: Droplets,
      value: '☁️',
      color: 'from-gray-500 to-gray-600'
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white mb-4">Today Highlight</h3>
      <div className="grid grid-cols-2 gap-4">
        {highlights.map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-colors">
            <div className="text-gray-400 text-xs mb-2">{item.title}</div>
            {item.subtitle && (
              <div className="text-gray-500 text-xs mb-3">{item.subtitle}</div>
            )}
            <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-white text-xl`}>
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightsGrid;