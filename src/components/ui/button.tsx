'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#FF6B4D] hover:bg-[#FF5c3f] text-[#1e1e1e] px-8 py-3 rounded-lg text-sm font-bold transition-all duration-200  shadow-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
