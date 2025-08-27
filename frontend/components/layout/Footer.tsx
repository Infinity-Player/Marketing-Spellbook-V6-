import React from 'react';

const footerLinks = {
  'Spellbook': [
    { name: 'All Chapters', href: '#' },
    { name: 'Templates', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Community', href: '#' }
  ],
  'Resources': [
    { name: 'Blog', href: '#' },
    { name: 'Podcast', href: '#' },
    { name: 'Newsletter', href: '#' },
    { name: 'Free Tools', href: '#' }
  ],
  'Support': [
    { name: 'Help Center', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ],
  'Company': [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press Kit', href: '#' },
    { name: 'Privacy Policy', href: '#' }
  ]
};

const socialLinks = [
  { name: 'Twitter', href: '#', icon: '🐦' },
  { name: 'LinkedIn', href: '#', icon: '💼' },
  { name: 'YouTube', href: '#', icon: '📺' },
  { name: 'Discord', href: '#', icon: '💬' }
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-purple-500/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 magical-gradient rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl font-bold">✨</span>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-white">
                  Marketing Spellbook
                </h3>
              </div>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-6">
              Unlock the ancient secrets of modern marketing. Transform your business with proven strategies, 
              powerful templates, and a supportive community of fellow practitioners.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 glass-dark rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-space-grotesk text-white font-bold mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 font-space-grotesk hover:text-purple-300 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="glass-dark rounded-2xl p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-white mb-4">
              Join the Inner Circle
            </h3>
            <p className="text-gray-300 font-space-grotesk mb-6">
              Get exclusive spells, insider tips, and early access to new chapters delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-purple-500/30 rounded-xl text-white font-space-grotesk placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              />
              <button className="magical-gradient text-white px-6 py-3 rounded-xl font-space-grotesk font-medium hover:scale-105 transition-transform duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 font-space-grotesk text-sm">
              © 2024 Marketing Spellbook. All rights reserved. Made with ✨ and a touch of magic.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-300 font-space-grotesk transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 font-space-grotesk transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 font-space-grotesk transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}