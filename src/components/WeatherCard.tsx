import React from 'react';
import { MapPin, Thermometer } from 'lucide-react';

const WeatherCard: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2 bg-blue-600 rounded-full px-4 py-2">
          <MapPin className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">Liceo Eugenio María De Hostos</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 text-sm">°F</span>
          <div className="w-12 h-6 bg-gray-700 rounded-full relative">
            <div className="w-5 h-5 bg-blue-600 rounded-full absolute top-0.5 left-0.5 transition-transform duration-200"></div>
          </div>
          <span className="text-white text-sm">°C</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="text-gray-400 text-sm mb-1">Monday</div>
          <div className="text-gray-300 text-sm mb-4">24 Dec, 2023</div>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-5xl font-light text-white">26°C</div>
            <div className="text-gray-400 text-sm">
              <div>High: 27 Low: 10</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <Thermometer className="w-4 h-4" />
            <span className="text-sm">Feels like 26</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-32 h-32 mb-4">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <div className="text-white text-2xl">☀️</div>
            </div>
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full opacity-60"></div>
            <div className="absolute -top-1 -right-4 w-2 h-2 bg-yellow-300 rounded-full opacity-80"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-orange-400 rounded-full opacity-70"></div>
          </div>
          <div className="text-xl font-semibold text-white mb-1">Cloudy</div>
          <div className="text-gray-400 text-sm">Feels Like 26</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;