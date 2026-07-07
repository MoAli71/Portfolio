import React from 'react';
import { Download, MessageCircle, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Mohammad Ali</span>
              <span className="block text-lg sm:text-xl lg:text-2xl text-blue-600 font-medium mt-2">
                Research Intern | Biotechnology, Biochemistry & Genetics | Freelance | AI Generalist (Beginner)
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
              Highly motivated life sciences graduate focused on genetics research, lab techniques, 
              and applied AI for biological research.
            </p>

            <div className="flex items-center justify-center lg:justify-start mb-8">
              <MapPin className="text-blue-600 mr-2" size={20} />
              <span className="text-gray-600">Al Ain, Abu Dhabi, UAE</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://1drv.ms/w/c/601de80aaafdd03b/EU6XrVke4N1AuT9VishxqnIB9TPACPYlss1_EhjMlXozfQ?e=KzSSfw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Download size={20} />
                <span className="font-medium">Download CV</span>
              </a>
              <button
                onClick={() => scrollToSection('#contact')}
                className="flex items-center justify-center space-x-2 px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle size={20} />
                <span className="font-medium">Let's Connect</span>
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative flex flex-col items-center space-y-6">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-60 h-60 bg-white rounded-full overflow-hidden shadow-inner">
                    <img
                      src="/Ali.jpg"
                      alt="Mohammad Ali Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Genetics Research Circle */}
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-200 to-emerald-200 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-60 h-60 bg-white rounded-full flex items-center justify-center shadow-inner">
                    <div className="text-center">
                      <div className="text-5xl mb-3">🧬</div>
                      <p className="text-base font-semibold text-gray-700">Genetics Research</p>
                      <p className="text-sm text-gray-500">& AI Innovation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">🔬</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">🤖</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;