import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Rahul', href: '#about' },
    { label: 'Join the Movement', href: '#join' },
    { label: 'Stories', href: '#stories' },
    { label: 'Events', href: '#events' },
    { label: 'Media', href: '#media' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-white to-green-600 rounded-full flex items-center justify-center font-bold text-blue-900 text-xl shadow-lg">
              RG
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">MeraPMRahul</h1>
              <p className="text-xs text-gray-600">मेरा प्रधानमंत्री राहुल</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
              Login
            </Button> */}
            <Button onClick={() => scrollToSection('#join')} className="bg-blue-900 text-white hover:bg-blue-800">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-gray-700 hover:text-blue-900 font-medium py-2 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              {/* <Button variant="outline" className="border-blue-900 text-blue-900 w-full mt-3">
                Login
              </Button> */}
              <Button onClick={() => scrollToSection('#join')} className="bg-blue-900 text-white w-full">
                Join Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
