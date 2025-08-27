import React from 'react';
import GlassmorphismCard from '../ui/GlassmorphismCard';
import MagicalButton from '../ui/MagicalButton';

const communityStats = [
  { number: "50,000+", label: "Active Practitioners", icon: "👥" },
  { number: "2.3M+", label: "Spells Cast", icon: "✨" },
  { number: "98%", label: "Success Rate", icon: "🎯" },
  { number: "24/7", label: "Community Support", icon: "🔮" }
];

const testimonials = [
  {
    text: "This community is pure magic. The support, knowledge sharing, and collaboration have transformed not just my marketing, but my entire business approach.",
    author: "Alex Thompson",
    role: "Marketing Director",
    company: "TechFlow",
    avatar: "https://i.pravatar.cc/150?img=4"
  },
  {
    text: "I've been in marketing for 15 years, but joining this coven taught me more in 3 months than I learned in the previous 3 years. The collective wisdom is incredible.",
    author: "Maria Santos",
    role: "Growth Lead",
    company: "StartupX",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    text: "The templates alone are worth 10x the price, but the community discussions and live spell-casting sessions? Absolutely priceless.",
    author: "David Kim",
    role: "Founder",
    company: "EcoTech",
    avatar: "https://i.pravatar.cc/150?img=6"
  }
];

export default function CommunitySection() {
  return (
    <section className="py-20 px-6 bg-slate-900 relative overflow-hidden">
      {/* Magical background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-indigo-900/10"></div>
        {/* Floating orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-purple-500/5 rounded-full blur-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Community <span className="magical-gradient bg-clip-text text-transparent">Coven</span>
          </h2>
          <p className="font-space-grotesk text-xl text-purple-200 max-w-3xl mx-auto">
            Join thousands of marketing practitioners sharing spells, celebrating victories, and supporting each other's magical journey.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <GlassmorphismCard key={index} className="text-center group" hover={true}>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="font-playfair text-3xl md:text-4xl font-bold text-white mb-2 magical-gradient bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="font-space-grotesk text-purple-300 font-medium">
                {stat.label}
              </div>
            </GlassmorphismCard>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="font-playfair text-3xl font-bold text-white text-center mb-12">
            Voices from the Coven
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <GlassmorphismCard 
                key={index} 
                className={`relative ${index === 1 ? 'lg:scale-105 lg:z-10' : ''}`}
                glow={index === 1}
              >
                {/* Quote marks */}
                <div className="absolute -top-4 -left-4 text-6xl text-purple-500/30 font-serif">"</div>
                
                <div className="relative z-10 pt-4">
                  <blockquote className="text-gray-300 font-space-grotesk leading-relaxed mb-6 italic">
                    {testimonial.text}
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={`${testimonial.author} avatar`}
                      className="w-12 h-12 rounded-full border-2 border-purple-400"
                    />
                    <div>
                      <div className="font-space-grotesk font-bold text-white">
                        {testimonial.author}
                      </div>
                      <div className="font-space-grotesk text-sm text-purple-300">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </GlassmorphismCard>
            ))}
          </div>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <GlassmorphismCard className="text-center">
            <div className="w-16 h-16 magical-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h4 className="font-space-grotesk text-xl font-bold text-white mb-3">
              Live Discussions
            </h4>
            <p className="text-gray-300 font-space-grotesk">
              Real-time strategy discussions, campaign reviews, and collaborative problem-solving.
            </p>
          </GlassmorphismCard>

          <GlassmorphismCard className="text-center">
            <div className="w-16 h-16 magical-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h4 className="font-space-grotesk text-xl font-bold text-white mb-3">
              Master Classes
            </h4>
            <p className="text-gray-300 font-space-grotesk">
              Weekly live sessions with industry experts sharing advanced techniques and insider secrets.
            </p>
          </GlassmorphismCard>

          <GlassmorphismCard className="text-center">
            <div className="w-16 h-16 magical-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="font-space-grotesk text-xl font-bold text-white mb-3">
              Peer Support
            </h4>
            <p className="text-gray-300 font-space-grotesk">
              Connect with like-minded practitioners, find accountability partners, and grow together.
            </p>
          </GlassmorphismCard>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="glass-dark rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="font-playfair text-3xl font-bold text-white mb-4">
              Ready to Join the Coven?
            </h3>
            <p className="font-space-grotesk text-purple-200 mb-8">
              Become part of the most supportive and knowledgeable marketing community. Your magical journey awaits.
            </p>
            <MagicalButton size="lg" className="mr-4">
              Join the Community
            </MagicalButton>
            <MagicalButton variant="ghost" size="lg">
              Learn More
            </MagicalButton>
          </div>
        </div>
      </div>
    </section>
  );
}