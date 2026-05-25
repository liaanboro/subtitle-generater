import React from 'react';
import { Settings2, Key, Database, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

const SettingsPanel = () => {
  return (
    <div className="max-w-4xl mx-auto h-full pb-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white flex items-center">
          <Settings2 className="w-6 h-6 mr-3 text-blue-400" />
          Settings
        </h1>
        <p className="text-zinc-400 mt-2">Manage your AI configurations and plugin preferences.</p>
      </div>

      <div className="space-y-6">
        {/* API Settings Card */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center mb-6 border-b border-white/5 pb-4">
            <Key className="w-5 h-5 text-indigo-400 mr-2" />
            <h2 className="text-lg font-semibold text-white">API Configuration</h2>
          </div>
          
          <div className="space-y-5 max-w-xl">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">OpenAI API Key</label>
              <div className="flex space-x-3">
                <Input type="password" placeholder="sk-..." defaultValue="sk-mock-key-for-testing" />
                <Button variant="secondary">Verify</Button>
              </div>
              <p className="text-xs text-zinc-500">Your key is stored securely in Premiere Pro's local keychain.</p>
            </div>
            
            <div className="space-y-2 pt-2">
              <label className="text-sm font-medium text-zinc-300">Default AI Model</label>
              <select className="w-full h-11 rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer appearance-none">
                <option>Whisper-1 (Fast & Accurate)</option>
                <option>Custom Model Endpoint</option>
              </select>
            </div>
          </div>
        </div>

        {/* Output Settings Card */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center mb-6 border-b border-white/5 pb-4">
            <Database className="w-5 h-5 text-purple-400 mr-2" />
            <h2 className="text-lg font-semibold text-white">Output Preferences</h2>
          </div>
          
          <div className="space-y-5 max-w-xl">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Default Output Format</label>
              <select className="w-full h-11 rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer appearance-none">
                <option>.SRT (SubRip Subtitle)</option>
                <option>.VTT (WebVTT)</option>
                <option>Premiere Essential Graphics (MoGrt)</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Network Settings Card */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center mb-6 border-b border-white/5 pb-4">
            <Globe className="w-5 h-5 text-green-400 mr-2" />
            <h2 className="text-lg font-semibold text-white">Network</h2>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-zinc-300">Offline Mode</p>
              <p className="text-xs text-zinc-500 mt-1">Force the plugin to use local transcription models only (requires downloading 2GB model).</p>
            </div>
            <div className="relative inline-block w-12 mr-2 align-middle select-none">
              <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-zinc-700 appearance-none cursor-pointer transition-transform duration-200 ease-in-out" disabled/>
              <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-zinc-800 cursor-pointer"></label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-end">
        <Button className="shadow-[0_0_20px_rgba(59,130,246,0.2)]">Save Changes</Button>
      </div>
    </div>
  );
};

export default SettingsPanel;
