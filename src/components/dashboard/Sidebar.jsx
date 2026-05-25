import React from 'react';
import { Type, Settings, History, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const { logout } = useAuth();

  const navItems = [
    { id: 'generator', label: 'Studio', icon: Type },
    { id: 'history', label: 'History', icon: History },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 glass-panel rounded-3xl flex flex-col h-full z-10 relative overflow-hidden border border-white/10 shadow-2xl">
      <div className="p-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-black border border-white/10 mb-4 shadow-[0_0_20px_rgba(37,244,238,0.3)] overflow-hidden p-1 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#25F4EE]/20 to-[#FE2C55]/20 mix-blend-overlay"></div>
          <img src="/crab-logo.png" alt="Crab Logo" className="w-full h-full object-contain relative z-10 hover:scale-110 transition-transform duration-300" />
        </div>
        <h2 className="text-2xl font-black text-white tracking-tighter glitch-hover cursor-default relative">
          AI Studio
        </h2>
      </div>

      <nav className="flex-1 px-4 space-y-3 mt-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-4 px-5 py-3.5 rounded-2xl transition-all duration-400 ease-out group relative overflow-hidden ${
                isActive 
                  ? 'bg-white/10 text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-white/10' 
                  : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200 border border-transparent'
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-r-md"></div>
              )}
              <Icon className={`h-5 w-5 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]' : 'opacity-70'}`} />
              <span className="font-semibold tracking-wide text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <button
          onClick={logout}
          className="w-full flex items-center space-x-3 px-5 py-4 rounded-2xl text-zinc-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 border border-transparent hover:border-red-500/20 group"
        >
          <LogOut className="h-5 w-5 opacity-70 group-hover:scale-110 transition-transform" />
          <span className="font-semibold text-sm">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
