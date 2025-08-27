import React, { useEffect, useState } from 'react';
import PremiumButton from '../ui/PremiumButton';

export default function PremiumHeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1567400358510-f027b3196d5b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBteXN0aWNhbCUyMHBhcnRpY2xlc3xlbnwwfDB8fHB1cnBsZXwxNzU2MzA1MjM2fDA&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-900/95" />
        
        {/* Animated Morphing Blobs */}
        <div className="absolute top-20 left-20 w-96 h-96 gradient-primary opacity-20 blur-3xl animate-morphing-blob animate-float" />
        <div 
          className="absolute bottom-20 right-20 w-[500px] h-[500px] gradient-secondary opacity-15 blur-3xl animate-morphing-blob"
          style={{ animationDelay: '3s', animationDuration: '12s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 gradient-aurora opacity-10 blur-3xl animate-morphing-blob animate-aurora-flow"
          style={{ animationDelay: '6s' }}
        />
        
        {/* Interactive Mouse Follower */}
        <div 
          className="absolute w-64 h-64 gradient-primary opacity-5 blur-3xl rounded-full pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-sparkle-dance"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <div className="mb-12 scroll-reveal">
          {/* Subtitle */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 glass-premium rounded-full text-sm font-medium text-white/80 mb-6">
              ✨ The Ultimate Marketing Transformation
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="font-playfair text-hero font-bold text-white mb-8 leading-none">
            Marketing
            <span className="block gradient-text-shimmer animate-text-shimmer">
              Spellbook
            </span>
            <span className="block text-6xl md:text-7xl lg:text-8xl font-light text-white/60">
              Ultimate v6
            </span>
          </h1>
          
          {/* Description */}
          <p className="font-inter text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Unlock the ancient secrets of modern marketing. Master the mystical arts of conversion, 
            engagement, and exponential growth with our ultimate collection of battle-tested strategies.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 scroll-reveal">
          <PremiumButton 
            size="xl" 
            variant="primary"
            className="font-inter group"
            icon={
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
            iconPosition="right"
          >
            Begin Your Journey
          </PremiumButton>
          
          <PremiumButton 
            size="xl" 
            variant="ghost"
            className="font-inter group"
            icon={
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            }
            iconPosition="left"
          >
            Explore the Grimoire
          </PremiumButton>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16 scroll-reveal">
          {[
            { number: "50,000+", label: "Practitioners" },
            { number: "2.3M+", label: "Spells Cast" },
            { number: "98%", label: "Success Rate" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-white/60 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 glass-premium rounded-full flex justify-center items-start p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}