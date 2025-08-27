import React from 'react';

interface MagicalButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function MagicalButton({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick 
}: MagicalButtonProps) {
  const baseClasses = "relative overflow-hidden font-medium transition-all duration-300 transform hover:scale-105 active:scale-95";
  
  const variantClasses = {
    primary: "magical-gradient text-white shadow-lg hover:shadow-xl animate-glow",
    secondary: "glass-dark text-white border-purple-400 hover:border-purple-300",
    ghost: "text-purple-300 hover:text-white hover:bg-purple-500/20"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
    </button>
  );
}