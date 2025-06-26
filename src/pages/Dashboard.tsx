import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';
import HighlightsGrid from '../components/HighlightsGrid';
import CO2Chart from '../components/CO2Chart';
import RecommendationsSection from '../components/RecommendationsSection';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header onLogout={onLogout} />
          <main className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2">
                  <WeatherCard />
                </div>
                <div>
                  <HighlightsGrid />
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <CO2Chart />
                </div>
                <div>
                  <RecommendationsSection />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;