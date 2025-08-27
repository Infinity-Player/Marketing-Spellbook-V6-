import React from 'react';
import MagicalButton from '../ui/MagicalButton';
import GlassmorphismCard from '../ui/GlassmorphismCard';

const pricingTiers = [
  {
    name: "Apprentice",
    price: "$47",
    period: "one-time",
    description: "Perfect for marketing beginners ready to learn the fundamentals",
    features: [
      "Complete Spellbook (6 Chapters)",
      "50+ Marketing Templates",
      "Basic Community Access",
      "Email Support",
      "Lifetime Updates"
    ],
    popular: false,
    cta: "Start Your Journey"
  },
  {
    name: "Sorcerer",
    price: "$97",
    period: "one-time",
    description: "For experienced marketers seeking advanced techniques and tools",
    features: [
      "Everything in Apprentice",
      "Advanced Template Library (200+)",
      "Premium Community Access",
      "Monthly Live Sessions",
      "1-on-1 Strategy Call",
      "Priority Support"
    ],
    popular: true,
    cta: "Unlock Full Power"
  },
  {
    name: "Archmage",
    price: "$197",
    period: "one-time",
    description: "Ultimate package for marketing leaders and agencies",
    features: [
      "Everything in Sorcerer",
      "White-label Rights",
      "Agency Toolkit",
      "Quarterly Mastermind",
      "Direct Access to Creators",
      "Custom Template Creation"
    ],
    popular: false,
    cta: "Master the Arts"
  }
];

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 relative overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0">
        <div className="aurora-gradient absolute inset-0 opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      </div>

      {/* Floating magical elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6">
            Master Your <span className="magical-gradient bg-clip-text text-transparent">Magic</span>
          </h2>
          <p className="font-space-grotesk text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
            Choose your path to marketing mastery. Each tier unlocks powerful spells, ancient wisdom, 
            and the tools needed to transform your business forever.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <GlassmorphismCard 
              key={index}
              className={`relative text-center ${
                tier.popular ? 'lg:scale-110 lg:z-20 border-2 border-purple-400' : ''
              }`}
              glow={tier.popular}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="magical-gradient text-white px-6 py-2 rounded-full text-sm font-space-grotesk font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="pt-6">
                {/* Tier Icon */}
                <div className="w-20 h-20 mx-auto mb-6 magical-gradient rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">
                    {index === 0 ? '🔮' : index === 1 ? '⚡' : '👑'}
                  </span>
                </div>

                {/* Tier Name */}
                <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="font-space-grotesk text-4xl font-bold text-white">
                    {tier.price}
                  </span>
                  <span className="text-purple-300 font-space-grotesk ml-2">
                    {tier.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 font-space-grotesk mb-8 leading-relaxed">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8 text-left">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 magical-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300 font-space-grotesk">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <MagicalButton 
                  variant={tier.popular ? 'primary' : 'secondary'}
                  size="lg"
                  className="w-full"
                >
                  {tier.cta}
                </MagicalButton>
              </div>
            </GlassmorphismCard>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mb-16">
          <GlassmorphismCard className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
            </div>
            <h3 className="font-playfair text-2xl font-bold text-white mb-4">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-gray-300 font-space-grotesk leading-relaxed">
              We're so confident in the power of our spellbook that we offer a full 30-day guarantee. 
              If you don't see magical results in your marketing, we'll refund every penny. No questions asked.
            </p>
          </GlassmorphismCard>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Your Marketing Transformation Starts Now
            </h3>
            <p className="font-space-grotesk text-xl text-purple-200 mb-8 leading-relaxed">
              Join thousands of marketers who've already unlocked the secrets. 
              The only question is: which magical path will you choose?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <MagicalButton size="lg" className="font-space-grotesk text-lg px-12 py-4">
                Choose Your Destiny
              </MagicalButton>
              <div className="text-center">
                <p className="text-purple-300 font-space-grotesk text-sm">
                  Questions? Contact our support wizards
                </p>
                <a href="mailto:support@marketingspellbook.com" className="text-purple-400 hover:text-purple-300 font-space-grotesk text-sm underline">
                  support@marketingspellbook.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}