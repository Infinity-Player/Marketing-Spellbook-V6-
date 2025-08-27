import React, { useState } from 'react';
import GlassmorphismCard from '../ui/GlassmorphismCard';
import MagicalButton from '../ui/MagicalButton';

const templates = [
  {
    id: 1,
    name: "Viral Launch Sequence",
    category: "Product Launch",
    description: "7-day email sequence that generated 2M+ impressions",
    preview: "Day 1: The Mysterious Announcement...",
    downloads: "12.3k",
    rating: 4.9,
    tags: ["Email", "Launch", "Viral"]
  },
  {
    id: 2,
    name: "Social Proof Amplifier",
    category: "Conversion",
    description: "Landing page template with 23% average conversion",
    preview: "Join 50,000+ marketers who've transformed...",
    downloads: "8.7k",
    rating: 4.8,
    tags: ["Landing Page", "Social Proof", "CRO"]
  },
  {
    id: 3,
    name: "Authority Builder Framework",
    category: "Content Strategy",
    description: "Content calendar that builds thought leadership",
    preview: "Week 1: Controversial Industry Take...",
    downloads: "15.2k",
    rating: 4.9,
    tags: ["Content", "Authority", "LinkedIn"]
  },
  {
    id: 4,
    name: "Retention Magic Formula",
    category: "Customer Success",
    description: "Reduce churn by 40% with this sequence",
    preview: "We noticed you haven't been active...",
    downloads: "6.4k",
    rating: 4.7,
    tags: ["Retention", "Email", "Churn"]
  },
  {
    id: 5,
    name: "Referral Spell System",
    category: "Growth",
    description: "Turn customers into brand evangelists",
    preview: "Your friends will thank you for this...",
    downloads: "9.1k",
    rating: 4.8,
    tags: ["Referral", "Growth", "Viral"]
  },
  {
    id: 6,
    name: "Crisis Communication Kit",
    category: "PR & Crisis",
    description: "Navigate PR disasters with grace and transparency",
    preview: "We want to address the recent concerns...",
    downloads: "4.2k",
    rating: 4.6,
    tags: ["PR", "Crisis", "Communication"]
  }
];

export default function TemplatesSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [previewTemplate, setPreviewTemplate] = useState<number | null>(null);

  const categories = ['All', 'Product Launch', 'Conversion', 'Content Strategy', 'Customer Success', 'Growth', 'PR & Crisis'];

  const filteredTemplates = selectedCategory === 'All' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-900/20 via-slate-800 to-indigo-900/20 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Spell <span className="magical-gradient bg-clip-text text-transparent">Templates</span>
          </h2>
          <p className="font-space-grotesk text-xl text-purple-200 max-w-3xl mx-auto">
            Ready-to-cast marketing spells. Copy, customize, and conjure results with our proven template library.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-space-grotesk font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'magical-gradient text-white shadow-lg'
                  : 'glass-dark text-purple-300 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <GlassmorphismCard 
              key={template.id}
              className="relative group"
              hover={true}
            >
              {/* Category badge */}
              <div className="absolute -top-3 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-space-grotesk font-bold">
                {template.category}
              </div>

              <div className="pt-4">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="font-space-grotesk text-xl font-bold text-white mb-2">
                      {template.name}
                    </h3>
                    <p className="text-gray-300 font-space-grotesk text-sm leading-relaxed">
                      {template.description}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="text-purple-300 font-space-grotesk">
                      {template.downloads} downloads
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-gray-300 font-space-grotesk">{template.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {template.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-md text-xs font-space-grotesk"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Preview */}
                <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                  <p className="text-gray-400 text-xs font-space-grotesk mb-2">Preview:</p>
                  <p className="text-gray-300 font-space-grotesk text-sm italic">
                    "{template.preview}"
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <MagicalButton 
                    variant="secondary" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => setPreviewTemplate(template.id)}
                  >
                    Preview
                  </MagicalButton>
                  <MagicalButton size="sm" className="flex-1">
                    Download
                  </MagicalButton>
                </div>
              </div>
            </GlassmorphismCard>
          ))}
        </div>

        <div className="text-center mt-16">
          <MagicalButton size="lg">
            Access Full Template Library
          </MagicalButton>
        </div>
      </div>

      {/* Preview Modal */}
      {previewTemplate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="glass-dark rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-playfair text-2xl font-bold text-white">
                Template Preview
              </h3>
              <button 
                onClick={() => setPreviewTemplate(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6">
              <p className="text-gray-300 font-space-grotesk">
                Full template preview would be displayed here with complete content, formatting, and customization options.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}