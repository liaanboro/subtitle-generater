import React, { useState } from 'react';
import { Play, Sparkles, Settings2, Download, Type, AudioLines } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import SubtitleCard from './SubtitleCard';
import { generateMockSubtitles } from '../../services/mockApi';

const SubtitleGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [subtitles, setSubtitles] = useState([]);
  
  const handleGenerate = async () => {
    setIsGenerating(true);
    setSubtitles([]);
    try {
      const generated = await generateMockSubtitles({
        language: 'Auto-detect',
        preset: 'Cinematic'
      });
      setSubtitles(generated);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="h-full flex flex-col xl:flex-row gap-8">
      
      {/* Configuration Panel */}
      <div className="w-full xl:w-[340px] flex flex-col gap-6">
        <div className="glass-card rounded-3xl p-7 relative">
          {/* Subtle accent glow top right */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none"></div>
          
          <h2 className="text-xl font-bold text-white mb-8 flex items-center">
            <Settings2 className="w-5 h-5 mr-3 text-blue-400" />
            Configuration
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-2.5">
              <label className="text-xs font-bold tracking-wider text-zinc-400 uppercase">Source Language</label>
              <div className="relative">
                <select className="w-full h-12 rounded-xl bg-black/40 border border-white/10 px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer appearance-none shadow-inner">
                  <option>Auto-detect</option>
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>Japanese</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 text-xs">▼</div>
              </div>
            </div>
            
            <div className="space-y-2.5">
              <label className="text-xs font-bold tracking-wider text-zinc-400 uppercase">Style Preset</label>
              <div className="relative">
                <select className="w-full h-12 rounded-xl bg-black/40 border border-white/10 px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer appearance-none shadow-inner">
                  <option>Cinematic (Centered)</option>
                  <option>YouTube Shorts (Dynamic)</option>
                  <option>Documentary (Bottom)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 text-xs">▼</div>
              </div>
            </div>
            
            <div className="space-y-2.5">
              <label className="text-xs font-bold tracking-wider text-zinc-400 uppercase">Max Characters per Line</label>
              <Input type="number" defaultValue={42} min={10} max={100} className="h-12 rounded-xl" />
            </div>
          </div>
          
          <div className="mt-10">
            <Button 
              className="w-full h-12 rounded-xl text-base font-bold tracking-wide relative overflow-hidden group" 
              onClick={handleGenerate}
              isLoading={isGenerating}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              {!isGenerating && <Sparkles className="w-5 h-5 mr-2 relative z-10" />}
              <span className="relative z-10">Generate Subtitles</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Results Panel */}
      <div className="flex-1 glass-card rounded-3xl p-8 flex flex-col min-h-[500px] border border-white/10 relative">
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/5">
          <h2 className="text-2xl font-bold text-white flex items-center tracking-tight">
            <AudioLines className="w-6 h-6 mr-3 text-indigo-400" />
            Timeline Generation
          </h2>
          {subtitles.length > 0 && (
            <Button variant="secondary" size="sm" className="bg-white/5 hover:bg-white/10 rounded-xl h-9">
              <Download className="w-4 h-4 mr-2" />
              Export .SRT
            </Button>
          )}
        </div>
        
        <div className="flex-1 overflow-y-auto pr-4 space-y-4 custom-scrollbar relative">
          {subtitles.length === 0 && !isGenerating && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-500">
              <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6 shadow-inner border border-white/5">
                <Type className="w-10 h-10 opacity-40 text-blue-400" />
              </div>
              <p className="text-lg font-medium text-white mb-2">Ready to Transcribe</p>
              <p className="text-sm max-w-xs text-center">Click "Generate Subtitles" to extract audio from Premiere Pro and let AI do the rest.</p>
            </div>
          )}
          
          {isGenerating && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Fancy Waveform */}
              <div className="flex items-end justify-center space-x-2 h-16 mb-8">
                <div className="w-2 bg-blue-500 rounded-t-full waveform-bar h-16"></div>
                <div className="w-2 bg-indigo-500 rounded-t-full waveform-bar h-12"></div>
                <div className="w-2 bg-purple-500 rounded-t-full waveform-bar h-8"></div>
                <div className="w-2 bg-blue-400 rounded-t-full waveform-bar h-14"></div>
                <div className="w-2 bg-indigo-400 rounded-t-full waveform-bar h-10"></div>
              </div>
              <p className="text-white font-bold tracking-wide text-xl mb-2">Analyzing Audio Track...</p>
              <p className="text-zinc-400 text-sm">Processing Premiere Pro active sequence</p>
            </div>
          )}
          
          {!isGenerating && subtitles.map((sub, index) => (
            <div key={sub.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{animationFillMode: 'both', animationDelay: `${index * 100}ms`}}>
              <SubtitleCard subtitle={sub} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubtitleGenerator;
