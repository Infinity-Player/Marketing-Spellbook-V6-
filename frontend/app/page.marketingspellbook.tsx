'use client';

import React from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import ChaptersSection from '../components/sections/ChaptersSection';
import ArsenalSection from '../components/sections/ArsenalSection';
import StoriesSection from '../components/sections/StoriesSection';
import TemplatesSection from '../components/sections/TemplatesSection';
import CommunitySection from '../components/sections/CommunitySection';
import CTASection from '../components/sections/CTASection';

export default function MarketingSpellbookPage() {
  return (
    <div className="min-h-screen bg-slate-900 font-space-grotesk">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <div id="chapters">
          <ChaptersSection />
        </div>
        
        <div id="arsenal">
          <ArsenalSection />
        </div>
        
        <div id="stories">
          <StoriesSection />
        </div>
        
        <div id="templates">
          <TemplatesSection />
        </div>
        
        <div id="community">
          <CommunitySection />
        </div>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}