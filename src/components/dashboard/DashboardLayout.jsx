import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import SubtitleGenerator from '../subtitles/SubtitleGenerator';
import SettingsPanel from '../settings/SettingsPanel';
import { useAuth } from '../../context/AuthContext';

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState('generator');
  const { user } = useAuth();

  const renderContent = () => {
    switch (activeTab) {
      case 'generator':
        return <SubtitleGenerator />;
      case 'history':
        return <div className="text-zinc-400 p-8 text-center animate-float mt-20">History view coming soon...</div>;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <SubtitleGenerator />;
    }
  };

  return (
    <div className="flex h-screen bg-transparent text-white relative overflow-hidden font-sans">
      {/* Insanely fancy background glowing effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[130px] pointer-events-none animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMSIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgweiIvPjwvZz48L3N2Zz4=')] opacity-60 pointer-events-none z-0"></div>
      
      <div className="flex w-full max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8 gap-6 relative z-10 h-full">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="flex flex-col flex-1 overflow-hidden glass-panel rounded-3xl relative border border-white/10 shadow-2xl">
          <Header />
          
          <main className="flex-1 overflow-y-auto p-6 md:p-8 relative custom-scrollbar">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
