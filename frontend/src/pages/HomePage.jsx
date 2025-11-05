import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import JoinMovement from '../components/JoinMovement';
import PledgeWall from '../components/PledgeWall';
import StoriesSection from '../components/StoriesSection';
import EventsSection from '../components/EventsSection';
import YouthHub from '../components/YouthHub';
import SocialMediaWall from '../components/SocialMediaWall';
import MediaLibrary from '../components/MediaLibrary';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`home-page ${isVisible ? 'fade-in-up' : ''}`}>
      <Header />
      <HeroSection setSelectedCategory={setSelectedCategory} />
      <AboutSection />
      <JoinMovement selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <PledgeWall />
      <StoriesSection />
      <EventsSection />
      {/* <YouthHub /> */}
      <SocialMediaWall />
      <MediaLibrary />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
