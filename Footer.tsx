import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 mb-8"
          >
            <span>Back to Top</span>
          </button>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm mb-4">
              © 2025 Mohammad Ali. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs flex items-center justify-center">
              Made with <Heart className="mx-1 text-red-500" size={14} /> for advancing scientific research
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;