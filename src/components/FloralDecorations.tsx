import React from 'react';

interface FloralDividerProps {
  className?: string;
  variant?: 'center' | 'left' | 'minimal';
}

export const FloralDivider: React.FC<FloralDividerProps> = ({ className = '', variant = 'center' }) => {
  return (
    <div className={`flex items-center justify-center space-x-3 my-6 ${className}`}>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-gold to-gold/60"></div>
      <svg
        className="w-5 h-5 text-gold flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C12 2 13.5 6.5 17 8C13.5 9.5 12 14 12 14C12 14 10.5 9.5 7 8C10.5 6.5 12 2 12 2Z" />
        <path d="M12 14C12 14 13.5 17.5 16 19C13.5 20.5 12 24 12 24C12 24 10.5 20.5 8 19C10.5 17.5 12 14 12 14Z" opacity="0.6"/>
        <circle cx="12" cy="11" r="1.5" />
      </svg>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-gold to-gold/60"></div>
    </div>
  );
};

export const FloatingPetals: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Decorative Soft Floating Botanicals */}
      <div className="absolute top-[15%] left-[5%] opacity-20 animate-float-slow">
        <svg className="w-16 h-16 text-sage" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C60 30 90 40 100 50 C70 60 60 90 50 100 C40 70 10 60 0 50 C30 40 40 10 50 0 Z" />
        </svg>
      </div>
      <div className="absolute top-[45%] right-[4%] opacity-20 animate-float-reverse">
        <svg className="w-20 h-20 text-gold" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
          <path d="M50 10 C55 35 75 45 90 50 C75 55 55 65 50 90 C45 65 25 55 10 50 C25 45 45 35 50 10 Z" />
        </svg>
      </div>
      <div className="absolute bottom-[20%] left-[8%] opacity-25 animate-float-slow">
        <svg className="w-12 h-12 text-champagne" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C60 30 90 40 100 50 C70 60 60 90 50 100 C40 70 10 60 0 50 C30 40 40 10 50 0 Z" />
        </svg>
      </div>
    </div>
  );
};
