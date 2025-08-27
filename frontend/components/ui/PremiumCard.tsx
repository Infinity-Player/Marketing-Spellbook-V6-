import React from 'react';

interface PremiumCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'glass' | 'solid' | 'gradient';
  hover?: boolean;
  glow?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

export default function PremiumCard({ 
  children, 
  className = '', 
  variant = 'glass',
  hover = true,
  glow = false,
  padding = 'lg',
  rounded = '2xl'
}: PremiumCardProps) {
  const baseClasses = "transition-all duration-500 ease-out";
  
  const variantClasses = {
    glass: "glass-dark-premium",
    solid: "bg-slate-800/90 border border-slate-700/50",
    gradient: "gradient-primary"
  };
  
  const hoverClasses = hover ? "hover-lift hover:shadow-premium" : "";
  const glowClasses = glow ? "animate-pulse-glow" : "";
  
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-12"
  };
  
  const roundedClasses = {
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    '2xl': "rounded-2xl",
    '3xl': "rounded-3xl"
  };

  return (
    <div className={`
      ${baseClasses} 
      ${variantClasses[variant]} 
      ${hoverClasses} 
      ${glowClasses} 
      ${paddingClasses[padding]}
      ${roundedClasses[rounded]}
      ${className}
    `}>
      {children}
    </div>
  );
}