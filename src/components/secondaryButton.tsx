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
      className={` text-[#1e1e1e] px-8 py-3 rounded-lg text-sm font-bold underline underline-offset-4 transition-all duration-200 `}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
