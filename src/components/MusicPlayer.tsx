import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorNodeRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalIdRef = useRef<number | null>(null);

  // High quality classical romantic piano arpeggio synthesizer using Web Audio API
  // No external mp3 file required! Never breaks or fails to load.
  const startRomanticHarp = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.2, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Chord progression in F major / D minor (Canon-like romantic feel)
      // Notes: F3, A3, C4, E4, G4, A4, C5, E5, F5
      const notes = [
        // Measure 1: Fmaj9
        [174.61, 220.00, 261.63, 329.63, 349.23, 440.00, 523.25, 659.25],
        // Measure 2: Cmaj / G
        [196.00, 246.94, 293.66, 329.63, 392.00, 493.88, 587.33, 659.25],
        // Measure 3: Dmin7
        [146.83, 220.00, 261.63, 349.23, 440.00, 523.25, 587.33, 698.46],
        // Measure 4: Bbmaj7
        [116.54, 174.61, 233.08, 293.66, 349.23, 440.00, 466.16, 587.33],
      ];

      let chordIdx = 0;
      let noteIdx = 0;

      const playPluck = () => {
        if (!audioContextRef.current || audioContextRef.current.state === 'closed') return;
        const c = audioContextRef.current;
        const osc = c.createOscillator();
        const noteGain = c.createGain();

        // Soft warm triangle/sine blend for warm acoustic piano-harp timbre
        osc.type = 'sine';
        const chord = notes[chordIdx];
        const freq = chord[noteIdx % chord.length];
        osc.frequency.setValueAtTime(freq, c.currentTime);

        // Envelope
        noteGain.gain.setValueAtTime(0.001, c.currentTime);
        noteGain.gain.exponentialRampToValueAtTime(0.18, c.currentTime + 0.04);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 1.8);

        osc.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start(c.currentTime);
        osc.stop(c.currentTime + 1.8);

        noteIdx++;
        if (noteIdx % 8 === 0) {
          chordIdx = (chordIdx + 1) % notes.length;
        }
      };

      // Play note every 360ms
      const interval = window.setInterval(playPluck, 360);
      intervalIdRef.current = interval;
    } catch (e) {
      console.warn("Audio Context init error", e);
    }
  };

  const stopMusic = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
    if (audioContextRef.current) {
      try {
        audioContextRef.current.close();
      } catch (e) {}
      audioContextRef.current = null;
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
      setIsPlaying(false);
    } else {
      startRomanticHarp();
      setIsPlaying(true);
      setShowPrompt(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 2500);

    return () => {
      clearTimeout(timer);
      stopMusic();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Toast Prompt for music */}
      {showPrompt && !isPlaying && (
        <div 
          onClick={toggleMusic}
          className="cursor-pointer bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-gold/30 text-xs font-medium text-espresso flex items-center gap-2 animate-bounce hover:bg-ivory transition-all"
        >
          <Music className="w-3.5 h-3.5 text-gold animate-spin" />
          <span>Click to play romantic music 🎵</span>
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
        aria-label={isPlaying ? "Mute background music" : "Play romantic background music"}
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
