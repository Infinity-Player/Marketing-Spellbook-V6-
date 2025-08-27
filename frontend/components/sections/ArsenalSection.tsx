import React from 'react';
import GlassmorphismCard from '../ui/GlassmorphismCard';
import MagicalButton from '../ui/MagicalButton';

const tools = [
  {
    category: "Strategy Scrolls",
    items: [
      { name: "Brand Positioning Canvas", description: "Map your unique market position", downloads: "2.3k" },
      { name: "Customer Journey Spellbook", description: "Chart every touchpoint", downloads: "1.8k" },
      { name: "Competitive Analysis Grimoire", description: "Uncover competitor secrets", downloads: "3.1k" }
    ]
  },
  {
    category: "Content Cauldrons",
    items: [
      { name: "Viral Content Formula", description: "Create share-worthy content", downloads: "4.2k" },
      { name: "Storytelling Templates", description: "Craft compelling narratives", downloads: "2.9k" },
      { name: "Hook & Headlines Library", description: "Attention-grabbing openers", downloads: "5.7k" }
    ]
  },
  {
    category: "Conversion Crystals",
    items: [
      { name: "Landing Page Blueprints", description: "High-converting page designs", downloads: "3.4k" },
      { name: "Email Sequence Spells", description: "Automated nurture campaigns", downloads: "2.1k" },
      { name: "Sales Funnel Formulas", description: "Complete conversion systems", downloads: "4.8k" }
    ]
  }
];

export default function ArsenalSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-800 via-purple-900/20 to-slate-800 relative">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Marketing <span className="magical-gradient bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="font-space-grotesk text-xl text-purple-200 max-w-3xl mx-auto">
            A treasure trove of battle-tested tools, templates, and resources to accelerate your marketing mastery.
          </p>
        </div>

        <div className="space-y-12">
          {tools.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative">
              <h3 className="font-playfair text-3xl font-bold text-white mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <GlassmorphismCard 
                    key={itemIndex}
                    className={`relative group ${itemIndex === 1 ? 'md:scale-105 md:z-10' : ''}`}
                  >
                    <div className="absolute top-4 right-4 bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs font-space-grotesk">
                      {item.downloads} downloads
                    </div>
                    
                    <div className="mb-4">
                      <div className="w-12 h-12 magical-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      
                      <h4 className="font-space-grotesk text-xl font-bold text-white mb-2">
                        {item.name}
                      </h4>
                      
                      <p className="font-space-grotesk text-gray-300 mb-6">
                        {item.description}
                      </p>
                    </div>
                    
                    <MagicalButton variant="secondary" size="sm" className="w-full">
                      Access Tool
                    </MagicalButton>
                  </GlassmorphismCard>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <MagicalButton size="lg">
            Unlock Full Arsenal
          </MagicalButton>
        </div>
      </div>
    </section>
  );
}