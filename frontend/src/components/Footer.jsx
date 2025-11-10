import React from 'react';
import { Heart } from 'lucide-react';

const SOCIAL_ICONS = {
  Twitter: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 .64a4.48 4.48 0 00-4.4 5.52A12.94 12.94 0 013 2.24s-4 9 5 13a13.06 13.06 0 01-8 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.1a1.1 1.1 0 110-2.2 1.1 1.1 0 010 2.2z"/>
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2V9.5a3 3 0 013.2-3.3c.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-2v7A10 10 0 0022 12z"/>
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M19.8 7.2c-.2-1.4-1.4-2.5-2.8-2.7C14.6 4 12 4 12 4s-2.6 0-4.9.5c-1.4.2-2.6 1.3-2.8 2.7C4 9.5 4 12 4 12s0 2.5.3 4.8c.2 1.4 1.4 2.5 2.8 2.7C9.4 20 12 20 12 20s2.6 0 4.9-.5c1.4-.2 2.6-1.3 2.8-2.7.3-2.3.3-4.8.3-4.8s0-2.5-.3-4.8zM10 15V9l5 3-5 3z"/>
    </svg>
  )
};

const NAV_ITEMS = [
  { title: 'About Rahul', href: '#about' },
  { title: 'Join Movement', href: '#join' },
  { title: 'Stories', href: '#stories' },
  { title: 'Events', href: '#events' },
  { title: 'Volunteer Zone', href: '#join' }
];

const RESOURCE_LINKS = [
  { title: 'Media Library', href: '#media' },
  { title: 'Press Releases', href: '#media' },
  { title: 'Contact', href: '#contact' }
];



const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-white to-green-600 rounded-full flex items-center justify-center font-bold text-blue-900 text-xl">
                RG
              </div>
              <div>
                <h3 className="text-xl font-bold">MeraPMRahul</h3>
                <p className="text-xs text-blue-200">मेरा प्रधानमंत्री राहुल</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              A people's movement for truth, trust, and transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>join.merapmrahul@gmail.com</li>
              <li>+91 91315 95022</li>
              <li className="pt-2">
                <span className="block font-semibold text-white mb-1">Follow Us:</span>
                <div className="flex space-x-2">
                  {['Twitter', 'Instagram', 'Facebook', 'YouTube'].map((letter) => (
                    <div
                      key={letter}
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center cursor-pointer transition-colors text-white"
                    >
                      {SOCIAL_ICONS[letter]}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} MeraPMRahul.com. All rights reserved.
            </p>
            <p className="text-blue-200 text-sm flex items-center">
              Developed with <Heart className="mx-2 text-red-400" size={16} fill="currentColor" /> by WithRG and BoothMitra Team
            </p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-blue-300 italic">
              "जो सुने, जो चले, जो सच्चाई के साथ खड़ा रहे, वही मेरा प्रधानमंत्री है।"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
