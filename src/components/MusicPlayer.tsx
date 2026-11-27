import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/wedding-song.mp3');
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setShowPrompt(false);
        })
        .catch((err) => {
          console.warn("Audio play blocked by browser policy:", err);
        });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Toast Prompt for music */}
      {showPrompt && !isPlaying && (
        <div 
          onClick={toggleMusic}
          className="cursor-pointer bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-gold/30 text-xs font-medium text-espresso flex items-center gap-2 animate-bounce hover:bg-ivory transition-all"
        >
          <Music className="w-3.5 h-3.5 text-gold animate-spin" />
          <span>Click to play wedding song 🎵</span>
          <button 
            onClick={(e) => { e.stopPropagation(); setShowPrompt(false); }}
            className="text-gray-400 hover:text-espresso ml-1 text-xs"
          >
            ✕
          </button>
        </div>
      )}

      {/* Floating control button */}
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Mute wedding song" : "Play wedding song"}
        className={`relative group p-3.5 rounded-full shadow-xl transition-all duration-300 border flex items-center justify-center ${
          isPlaying
            ? 'bg-gold text-white border-gold shadow-gold/30 ring-4 ring-gold/20'
            : 'bg-white/90 backdrop-blur text-espresso border-champagne hover:border-gold hover:text-gold'
        }`}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5 opacity-70 group-hover:opacity-100" />
        )}

        {/* Pulse effect rings when playing */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-gold/40 animate-ping pointer-events-none" />
        )}
      </button>
    </div>
  );
};
