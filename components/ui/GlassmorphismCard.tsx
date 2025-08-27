import React from 'react';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassmorphismCard({ 
  children, 
  className = '', 
  hover = true,
  glow = false 
}: GlassmorphismCardProps) {
  const baseClasses = "glass-dark rounded-2xl p-6 transition-all duration-300";
  const hoverClasses = hover ? "hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20" : "";
  const glowClasses = glow ? "animate-glow" : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${glowClasses} ${className}`}>
      {children}
    </div>
  );
}