import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'UI/UX Designer',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="text-primary-600 relative">
                  Your Name
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary-200"></span>
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl text-secondary-600 mb-8 h-8">
                <span className="inline-block transition-all duration-500 ease-in-out">
                  {roles[currentRole]}
                </span>
              </div>
              
              <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                I create beautiful, functional, and user-centered digital experiences. 
                Passionate about clean code, innovative solutions, and continuous learning.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn-primary text-lg px-8 py-4"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image/Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile Image Placeholder */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center shadow-2xl animate-slide-up">
                <div className="w-72 h-72 lg:w-88 lg:h-88 bg-white rounded-full flex items-center justify-center shadow-inner">
                  <div className="text-6xl lg:text-8xl text-primary-600 font-bold">
                    👨‍💻
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg animate-bounce">
                💻
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                ⚡
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce" style={{ animationDelay: '2s' }}>
                🚀
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-secondary-400 hover:text-primary-600 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
