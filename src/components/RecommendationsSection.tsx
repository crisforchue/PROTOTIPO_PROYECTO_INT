import React from 'react';
import { AlertTriangle, Droplets, Thermometer, Wind } from 'lucide-react';

const RecommendationsSection: React.FC = () => {
  const recommendations = [
    {
      title: 'CO₂ > 1000 ppm',
      description: 'Ventilate the classroom - CO₂ levels are high.',
      icon: Wind,
      color: 'bg-purple-600',
      priority: 'high'
    },
    {
      title: 'PM2.5 / PM10 > 35 μg/m³',
      description: 'Avoid intense physical activity. Air contains high particulate matter.',
      icon: AlertTriangle,
      color: 'bg-yellow-600',
      priority: 'medium'
    },
    {
      title: 'Humidity > 70%',
      description: 'Maintain hydration. Consider using fans or cooling systems.',
      icon: Droplets,
      color: 'bg-blue-600',
      priority: 'low'
    },
    {
      title: 'Temperature > 30',
      description: 'High temperature. Stay hydrated and ensure good classroom ventilation.',
      icon: Thermometer,
      color: 'bg-red-600',
      priority: 'medium'
    }
  ];

  return (
    <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Recommendations</h3>
        <button className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
          Show All
        </button>
      </div>
      
      <div className="space-y-4">
        {recommendations.map((item, index) => (
          <div key={index} className="bg-gray-700 rounded-xl p-4 border border-gray-600 hover:border-gray-500 transition-all duration-200">
            <div className="flex items-start space-x-3">
              <div className={`${item.color} rounded-lg p-2 flex-shrink-0`}>
                <item.icon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
              </div>
              <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
                item.priority === 'high' ? 'bg-red-500' :
                item.priority === 'medium' ? 'bg-yellow-500' :
                'bg-green-500'
              }`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsSection;