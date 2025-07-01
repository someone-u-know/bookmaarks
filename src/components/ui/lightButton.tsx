'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const LightButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#FFF4F2] hover:bg-[#EEE3E1] text-[#FF6B4D] px-8 py-3 rounded-lg text-sm font-bold transition-all duration-200  shadow-md ${className}`}
    >
      {children}
    </button>
  );
};

export default LightButton;
