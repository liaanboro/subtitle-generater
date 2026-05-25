import React from 'react';
import { User, Bell, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="h-20 border-b border-white/5 flex items-center justify-between px-10 relative z-10 bg-black/20 backdrop-blur-md">
      <div className="flex items-center">
        <div className="flex flex-col ml-2">
          <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">Active Timeline</span>
          <span className="text-sm font-bold text-white tracking-wide">Sequence 01.prproj</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
        <button className="text-zinc-400 hover:text-white transition-colors relative group">
          <Bell className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-[#0a0a0f]"></span>
        </button>
        <div className="h-8 w-px bg-white/10"></div>
        <div className="flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <User className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold text-zinc-200 pr-1">{user?.email || 'User'}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
