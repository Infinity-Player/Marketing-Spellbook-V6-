import React from 'react';
import GlassmorphismCard from '../ui/GlassmorphismCard';

const chapters = [
  {
    title: "The Art of Enchantment",
    subtitle: "Brand Storytelling & Positioning",
    description: "Learn to weave compelling narratives that captivate your audience and position your brand as the hero of their journey.",
    icon: "📖",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Potion of Persuasion",
    subtitle: "Copywriting & Content Magic",
    description: "Master the alchemical formulas of persuasive writing that transform prospects into devoted customers.",
    icon: "🧪",
    color: "from-blue-500 to-purple-500"
  },
  {
    title: "Crystal Ball Analytics",
    subtitle: "Data-Driven Divination",
    description: "Peer into the future of your campaigns with advanced analytics and predictive marketing strategies.",
    icon: "🔮",
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Social Media Sorcery",
    subtitle: "Platform-Specific Spells",
    description: "Cast powerful engagement spells across all social platforms with platform-specific strategies.",
    icon: "✨",
    color: "from-pink-500 to-purple-500"
  },
  {
    title: "Email Enchantments",
    subtitle: "Automated Magic Sequences",
    description: "Create self-sustaining email campaigns that nurture leads and convert them while you sleep.",
    icon: "📜",
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Growth Grimoire",
    subtitle: "Scaling & Optimization",
    description: "Unlock the secrets of exponential growth with advanced scaling techniques and optimization rituals.",
    icon: "🌟",
    color: "from-green-500 to-teal-500"
  }
];

export default function ChaptersSection() {
  return (
    <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            The Sacred <span className="magical-gradient bg-clip-text text-transparent">Chapters</span>
          </h2>
          <p className="font-space-grotesk text-xl text-purple-200 max-w-3xl mx-auto">
            Each chapter contains ancient wisdom and modern techniques, carefully curated to transform your marketing prowess.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((chapter, index) => (
            <GlassmorphismCard 
              key={index} 
              className={`relative overflow-hidden group ${index % 2 === 0 ? 'lg:mt-8' : ''}`}
              glow={index === 2}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${chapter.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {chapter.icon}
                </div>
                
                <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                  {chapter.title}
                </h3>
                
                <p className="font-space-grotesk text-purple-300 font-medium mb-4">
                  {chapter.subtitle}
                </p>
                
                <p className="font-space-grotesk text-gray-300 leading-relaxed">
                  {chapter.description}
                </p>

                <div className="mt-6 flex items-center text-purple-300 group-hover:text-purple-200 transition-colors">
                  <span className="font-space-grotesk text-sm font-medium">Unlock Chapter</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </GlassmorphismCard>
          ))}
        </div>
      </div>
    </section>
  );
}