import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-white to-green-600 rounded-full flex items-center justify-center font-bold text-blue-900 text-xl">
                MP
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
              {['About Rahul', 'Join Movement', 'Stories', 'Events', 'Volunteer Zone'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Media Library', 'Press Releases', 'Campaign Toolkit', 'FAQs', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>contact@merapmrahul.com</li>
              <li>+91 99883 65265</li>
              <li className="pt-2">
                <span className="block font-semibold text-white mb-1">Follow Us:</span>
                <div className="flex space-x-2">
                  {['T', 'I', 'F', 'Y'].map((letter) => (
                    <div
                      key={letter}
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center cursor-pointer transition-colors"
                    >
                      {letter}
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
