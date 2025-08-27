import React from 'react';
import GlassmorphismCard from '../ui/GlassmorphismCard';

const stories = [
  {
    company: "TechStartup Inc.",
    industry: "SaaS",
    challenge: "0 to 100k MRR",
    result: "Achieved in 8 months",
    growth: "+2,400%",
    avatar: "https://i.pravatar.cc/150?img=1",
    quote: "The spellbook transformed our entire approach. We went from struggling to find customers to having a waitlist of 500+ prospects.",
    name: "Sarah Chen",
    position: "Founder & CEO"
  },
  {
    company: "EcoCommerce",
    industry: "E-commerce",
    challenge: "Low conversion rates",
    result: "5x conversion increase",
    growth: "+400%",
    avatar: "https://i.pravatar.cc/150?img=2",
    quote: "The conversion crystals chapter alone paid for itself 10x over. Our landing pages now convert at 15% instead of 3%.",
    name: "Marcus Rodriguez",
    position: "Marketing Director"
  },
  {
    company: "HealthTech Solutions",
    industry: "Healthcare",
    challenge: "Complex B2B sales",
    result: "Shortened sales cycle",
    growth: "-60% time",
    avatar: "https://i.pravatar.cc/150?img=3",
    quote: "The email enchantments automated our entire nurture sequence. We're closing deals 60% faster with less manual effort.",
    name: "Dr. Emily Watson",
    position: "CMO"
  }
];

export default function StoriesSection() {
  return (
    <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
      {/* Background magic */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Success <span className="magical-gradient bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="font-space-grotesk text-xl text-purple-200 max-w-3xl mx-auto">
            Witness the magical transformations of businesses that mastered the ancient arts of modern marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <GlassmorphismCard 
              key={index}
              className={`relative group ${index === 1 ? 'lg:scale-105 lg:z-10' : ''}`}
              glow={index === 1}
            >
              {/* Transformation indicator */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-space-grotesk font-bold">
                  {story.growth} Growth
                </div>
              </div>

              <div className="pt-6">
                {/* Before/After visual */}
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-2">
                        <span className="text-red-400 text-2xl">😰</span>
                      </div>
                      <span className="text-xs text-gray-400 font-space-grotesk">Before</span>
                    </div>
                    
                    <div className="flex-1 h-px bg-gradient-to-r from-red-500 via-purple-500 to-green-500 relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 magical-gradient rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                        <span className="text-green-400 text-2xl">🚀</span>
                      </div>
                      <span className="text-xs text-gray-400 font-space-grotesk">After</span>
                    </div>
                  </div>
                </div>

                {/* Company info */}
                <div className="text-center mb-6">
                  <h3 className="font-space-grotesk text-xl font-bold text-white mb-1">
                    {story.company}
                  </h3>
                  <p className="text-purple-300 text-sm font-space-grotesk">
                    {story.industry}
                  </p>
                </div>

                {/* Challenge & Result */}
                <div className="bg-purple-500/10 rounded-xl p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-gray-400 text-xs font-space-grotesk mb-1">Challenge</p>
                      <p className="text-white text-sm font-space-grotesk font-medium">{story.challenge}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-space-grotesk mb-1">Result</p>
                      <p className="text-green-400 text-sm font-space-grotesk font-medium">{story.result}</p>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 font-space-grotesk italic text-center mb-6 leading-relaxed">
                  "{story.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-3">
                  <img 
                    src={story.avatar} 
                    alt={`${story.name} avatar`}
                    className="w-10 h-10 rounded-full border-2 border-purple-400"
                  />
                  <div>
                    <p className="text-white font-space-grotesk font-medium text-sm">{story.name}</p>
                    <p className="text-purple-300 font-space-grotesk text-xs">{story.position}</p>
                  </div>
                </div>
              </div>
            </GlassmorphismCard>
          ))}
        </div>
      </div>
    </section>
  );
}