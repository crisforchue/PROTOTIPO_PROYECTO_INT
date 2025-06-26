import React from 'react';
import { School, BarChart3, Calendar, MapPin, Briefcase, Settings, MessageCircle } from 'lucide-react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', active: true },
    { icon: Calendar, label: 'Schedule' },
    { icon: MapPin, label: 'Locations' },
    { icon: Briefcase, label: 'Reports' },
    { icon: Settings, label: 'Settings' },
    { icon: MessageCircle, label: 'Support' },
  ];

  return (
    <div className="w-16 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-6">
      <div className="mb-8">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <School className="w-6 h-6 text-white" />
        </div>
      </div>
      
      <nav className="flex-1 space-y-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
              item.active 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;