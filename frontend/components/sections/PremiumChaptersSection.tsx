import React from 'react';
import PremiumCard from '../ui/PremiumCard';
import PremiumButton from '../ui/PremiumButton';

const chapters = [
  {
    title: "The Art of Enchantment",
    subtitle: "Brand Storytelling & Positioning",
    description: "Learn to weave compelling narratives that captivate your audience and position your brand as the hero of their journey.",
    icon: "🎭",
    gradient: "from-violet-500 to-purple-600",
    stats: { lessons: 12, duration: "2.5h", level: "Beginner" }
  },
  {
    title: "Potion of Persuasion",
    subtitle: "Copywriting & Content Magic",
    description: "Master the alchemical formulas of persuasive writing that transform prospects into devoted customers.",
    icon: "🧪",
    gradient: "from-blue-500 to-cyan-600",
    stats: { lessons: 15, duration: "3.2h", level: "Intermediate" }
  },
  {
    title: "Crystal Ball Analytics",
    subtitle: "Data-Driven Divination",
    description: "Peer into the future of your campaigns with advanced analytics and predictive marketing strategies.",
    icon: "🔮",
    gradient: "from-emerald-500 to-teal-600",
    stats: { lessons: 18, duration: "4.1h", level: "Advanced" }
  },
  {
    title: "Social Media Sorcery",
    subtitle: "Platform-Specific Spells",
    description: "Cast powerful engagement spells across all social platforms with platform-specific strategies.",
    icon: "✨",
    gradient: "from-pink-500 to-rose-600",
    stats: { lessons: 20, duration: "3.8h", level: "Intermediate" }
  },
  {
    title: "Email Enchantments",
    subtitle: "Automated Magic Sequences",
    description: "Create self-sustaining email campaigns that nurture leads and convert them while you sleep.",
    icon: "📜",
    gradient: "from-amber-500 to-orange-600",
    stats: { lessons: 14, duration: "2.9h", level: "Beginner" }
  },
  {
    title: "Growth Grimoire",
    subtitle: "Scaling & Optimization",
    description: "Unlock the secrets of exponential growth with advanced scaling techniques and optimization rituals.",
    icon: "🌟",
    gradient: "from-indigo-500 to-purple-600",
    stats: { lessons: 22, duration: "5.2h", level: "Expert" }
  }
];

export default function PremiumChaptersSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 gradient-primary opacity-5 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 gradient-secondary opacity-5 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-reveal">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 glass-premium rounded-full text-sm font-medium text-white/80">
              📚 Master the Ancient Arts
            </span>
          </div>
          
          <h2 className="font-playfair text-display font-bold text-white mb-8">
            The Sacred <span className="gradient-text-primary">Chapters</span>
          </h2>
          
          <p className="font-inter text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Each chapter contains ancient wisdom and modern techniques, carefully curated to transform 
            your marketing prowess from apprentice to master.
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {chapters.map((chapter, index) => (
            <PremiumCard 
              key={index} 
              className={`relative group overflow-hidden ${index % 2 === 0 ? 'lg:mt-8' : ''}`}
              hover={true}
              glow={index === 2}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${chapter.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Level Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {chapter.icon}
                  </div>
                  <span className={`px-3 py-1 bg-gradient-to-r ${chapter.gradient} text-white text-xs font-medium rounded-full`}>
                    {chapter.stats.level}
                  </span>
                </div>
                
                {/* Title & Subtitle */}
                <h3 className="font-playfair text-2xl font-bold text-white mb-2 group-hover:gradient-text-primary transition-all duration-300">
                  {chapter.title}
                </h3>
                
                <p className="font-inter text-purple-300 font-medium mb-4">
                  {chapter.subtitle}
                </p>
                
                {/* Description */}
                <p className="font-inter text-white/70 leading-relaxed mb-6">
                  {chapter.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-white/60 mb-6">
                  <span>{chapter.stats.lessons} lessons</span>
                  <span>{chapter.stats.duration}</span>
                </div>

                {/* CTA */}
                <PremiumButton 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:variant-primary transition-all duration-300"
                  icon={
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  }
                  iconPosition="right"
                >
                  Unlock Chapter
                </PremiumButton>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </PremiumCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center scroll-reveal">
          <PremiumButton 
            size="lg" 
            variant="primary"
            className="font-inter"
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            iconPosition="left"
          >
            Access All Chapters
          </PremiumButton>
        </div>
      </div>
    </section>
  );
}