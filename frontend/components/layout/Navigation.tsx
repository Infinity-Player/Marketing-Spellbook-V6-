import React, { useState, useEffect } from 'react';
import MagicalButton from '../ui/MagicalButton';

const navItems = [
  { name: 'Chapters', href: '#chapters' },
  { name: 'Arsenal', href: '#arsenal' },
  { name: 'Stories', href: '#stories' },
  { name: 'Templates', href: '#templates' },
  { name: 'Community', href: '#community' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-dark backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 magical-gradient rounded-xl flex items-center justify-center">
              <span className="text-white text-xl font-bold">✨</span>
            </div>
            <div>
              <h1 className="font-playfair text-xl font-bold text-white">
                Marketing Spellbook
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-space-grotesk text-purple-200 hover:text-white transition-colors duration-300 relative group"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 magical-gradient group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <MagicalButton variant="ghost" size="sm">
              Sign In
            </MagicalButton>
            <MagicalButton size="sm">
              Get Started
            </MagicalButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-dark rounded-2xl mt-4 p-6 mb-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block font-space-grotesk text-purple-200 hover:text-white transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-purple-500/20 space-y-3">
                <MagicalButton variant="ghost" size="sm" className="w-full">
                  Sign In
                </MagicalButton>
                <MagicalButton size="sm" className="w-full">
                  Get Started
                </MagicalButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}