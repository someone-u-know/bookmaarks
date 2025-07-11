'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` text-[#1e1e1e] bg-[#FFC1B6] px-4 py-2 rounded-lg text-sm font-semibold active:scale-95  focus:outline-none focus:ring-0 transition-all duration-200 `}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
