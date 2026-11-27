import React from 'react';

interface FloralDividerProps {
  className?: string;
  variant?: 'center' | 'left' | 'minimal';
}

export const FloralDivider: React.FC<FloralDividerProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center space-x-3 my-6 ${className}`}>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-gold/60 to-gold"></div>
      <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-gold/60 to-gold"></div>
    </div>
  );
};

export const FloatingPetals: React.FC = () => {
  return null;
};
