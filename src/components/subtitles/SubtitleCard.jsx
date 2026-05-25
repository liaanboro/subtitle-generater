import React, { useState, useRef, useEffect } from 'react';
import { Clock, Edit2, Check, X } from 'lucide-react';
import { Button } from '../ui/Button';

const SubtitleCard = ({ subtitle, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(subtitle.text);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setText(subtitle.text);
    setIsEditing(false);
  };

  return (
    <div className="group relative bg-black/40 hover:bg-black/60 border border-white/5 hover:border-white/10 rounded-2xl p-5 transition-all duration-300 shadow-lg overflow-hidden">
      {/* Fancy Glowing Left Border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_15px_#3b82f6] transition-all duration-300"></div>

      <div className="flex items-start justify-between mb-3 pl-2">
        <div className="flex items-center space-x-4">
          <span className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 bg-white/5 px-2.5 py-1.5 rounded-lg border border-blue-500/20">
            #{index + 1}
          </span>
          <div className="flex items-center text-xs text-blue-400/80 font-semibold tracking-wide bg-blue-500/5 px-3 py-1.5 rounded-lg border border-blue-500/10">
            <Clock className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
            {subtitle.start} <span className="text-zinc-600 mx-2">→</span> {subtitle.end}
          </div>
        </div>
        
        {!isEditing && (
          <button 
            onClick={() => setIsEditing(true)}
            className="opacity-0 group-hover:opacity-100 p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        )}
      </div>
      
      <div className="pl-2">
        {isEditing ? (
          <div className="mt-3 space-y-3 animate-in fade-in zoom-in-95 duration-200">
            <textarea
              ref={inputRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full bg-black/60 border border-blue-500/50 rounded-xl p-4 text-white text-[15px] leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none h-24 shadow-inner"
            />
            <div className="flex justify-end space-x-3">
              <Button size="sm" variant="ghost" onClick={handleCancel} className="rounded-lg">
                <X className="w-4 h-4 mr-1.5" /> Cancel
              </Button>
              <Button size="sm" onClick={handleSave} className="h-9 rounded-lg px-5 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Check className="w-4 h-4 mr-1.5" /> Save
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-zinc-200 text-[15px] mt-1 leading-relaxed font-medium">
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default SubtitleCard;
