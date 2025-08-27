'use client';

import React, { useEffect } from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import PremiumHeroSection from '../components/sections/PremiumHeroSection';
import PremiumChaptersSection from '../components/sections/PremiumChaptersSection';
import ArsenalSection from '../components/sections/ArsenalSection';
import StoriesSection from '../components/sections/StoriesSection';
import TemplatesSection from '../components/sections/TemplatesSection';
import CommunitySection from '../components/sections/CommunitySection';
import CTASection from '../components/sections/CTASection';

export default function Page() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 font-inter overflow-x-hidden">
      <Navigation />
      
      <main>
        <PremiumHeroSection />
        
        <div id="chapters">
          <PremiumChaptersSection />
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