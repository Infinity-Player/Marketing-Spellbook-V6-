import React from 'react';
import MagicalButton from '../ui/MagicalButton';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-300 rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Marketing
            <span className="block magical-gradient bg-clip-text text-transparent animate-glow">
              Spellbook
            </span>
          </h1>
          <p className="font-space-grotesk text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Unlock the ancient secrets of modern marketing. Master the mystical arts of conversion, 
            engagement, and growth with our ultimate collection of proven strategies.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <MagicalButton size="lg" className="font-space-grotesk">
            Begin Your Journey
          </MagicalButton>
          <MagicalButton variant="ghost" size="lg" className="font-space-grotesk">
            Explore the Grimoire
          </MagicalButton>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}