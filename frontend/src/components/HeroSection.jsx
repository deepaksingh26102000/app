import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Heart, Users, Flag } from 'lucide-react';
import { mockData } from '../mock';

const HeroSection = () => {
  const [pledgeCount, setPledgeCount] = useState(0);

  // Animated counter effect
  useEffect(() => {
    const target = mockData.pledgeCount;
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setPledgeCount(target);
        clearInterval(timer);
      } else {
        setPledgeCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1723056416893-e38cdbd35685"
          alt="People's Movement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/75 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl">
          {/* Main Tagline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">जो सुने, जो चले,</span>
            <span className="block mt-2">जो लड़े,</span>
            <span className="block mt-2 text-orange-400">वही मेरा प्रधानमंत्री।</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Join millions who believe in truth, compassion and justice.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg shadow-xl"
            >
              <Heart className="mr-2" size={20} />
              Join the Movement
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/50 hover:bg-white/20 font-semibold px-8 py-6 text-lg"
            >
              Share Your Story
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white/50 hover:bg-white/20 font-semibold px-8 py-6 text-lg"
            >
              <Users className="mr-2" size={20} />
              Volunteer Now
            </Button>
          </div>

          {/* Live Counter */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 inline-block border border-white/20">
            <div className="flex items-center space-x-4">
              <Flag className="text-orange-400" size={32} />
              <div>
                <p className="text-white/80 text-sm font-medium mb-1">
                  People who have taken the Mera PM Pledge:
                </p>
                <p className="text-4xl font-bold text-white count-animation">
                  {pledgeCount.toLocaleString('en-IN')}
                  <span className="text-green-400 ml-2">और बढ़ रहा है...</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
