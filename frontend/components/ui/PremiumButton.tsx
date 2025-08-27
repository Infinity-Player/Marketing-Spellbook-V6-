import React from 'react';

interface PremiumButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function PremiumButton({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left'
}: PremiumButtonProps) {
  const baseClasses = "relative overflow-hidden font-medium transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2";
  
  const variantClasses = {
    primary: "gradient-primary text-white shadow-premium hover:shadow-glow-primary hover:-translate-y-1",
    secondary: "gradient-secondary text-white shadow-premium hover:shadow-glow-secondary hover:-translate-y-1",
    ghost: "glass-dark-premium text-white hover:glass-premium hover:-translate-y-0.5",
    outline: "border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg min-h-[36px]",
    md: "px-6 py-3 text-base rounded-xl min-h-[44px]",
    lg: "px-8 py-4 text-lg rounded-2xl min-h-[52px]",
    xl: "px-12 py-5 text-xl rounded-3xl min-h-[60px]"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
      
      {/* Loading Spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Content */}
      <span className={`relative z-10 flex items-center gap-2 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </span>
    </button>
  );
}