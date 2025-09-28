import React from 'react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  category: 'award' | 'certification' | 'publication' | 'recognition';
  icon: string;
  issuer?: string;
  url?: string;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'Best Web Developer Award',
      description: 'Recognized for outstanding contribution to web development and innovative solutions',
      date: '2024',
      category: 'award',
      icon: '🏆',
      issuer: 'Tech Innovation Summit',
      url: 'https://example.com'
    },
    {
      id: 2,
      title: 'AWS Certified Solutions Architect',
      description: 'Professional certification in designing distributed systems on AWS',
      date: '2023',
      category: 'certification',
      icon: '☁️',
      issuer: 'Amazon Web Services'
    },
    {
      id: 3,
      title: 'React Developer Certification',
      description: 'Advanced React.js development and best practices certification',
      date: '2023',
      category: 'certification',
      icon: '⚛️',
      issuer: 'Meta (Facebook)'
    },
    {
      id: 4,
      title: 'Published Research Paper',
      description: 'Co-authored research on "Modern Web Development Patterns and Performance Optimization"',
      date: '2023',
      category: 'publication',
      icon: '📄',
      issuer: 'International Journal of Web Technologies',
      url: 'https://example.com'
    },
    {
      id: 5,
      title: 'Open Source Contributor',
      description: 'Active contributor to major open source projects with 1000+ GitHub stars',
      date: '2022-2024',
      category: 'recognition',
      icon: '🌟',
      issuer: 'GitHub Community'
    },
    {
      id: 6,
      title: 'Hackathon Winner',
      description: 'First place in National Web Development Hackathon with innovative AI integration',
      date: '2022',
      category: 'award',
      icon: '🚀',
      issuer: 'National Tech Conference'
    }
  ];

  const stats = [
    { label: 'Certifications', value: '8+', icon: '📜' },
    { label: 'Awards Won', value: '5+', icon: '🏅' },
    { label: 'Publications', value: '3+', icon: '📚' },
    { label: 'Speaking Events', value: '10+', icon: '🎯' }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'award':
        return 'from-yellow-400 to-orange-500';
      case 'certification':
        return 'from-blue-400 to-blue-600';
      case 'publication':
        return 'from-green-400 to-green-600';
      case 'recognition':
        return 'from-purple-400 to-purple-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'award':
        return 'Award';
      case 'certification':
        return 'Certification';
      case 'publication':
        return 'Publication';
      case 'recognition':
        return 'Recognition';
      default:
        return 'Achievement';
    }
  };

  return (
    <section id="achievements" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            <span className="text-primary-600">Achievements</span> & Recognition
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            A collection of my professional achievements, certifications, and recognitions that showcase my commitment to excellence.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-secondary-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${getCategoryColor(achievement.category)}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{achievement.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(achievement.category)} text-white`}>
                    {getCategoryLabel(achievement.category)}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-secondary-600 mb-4 text-sm leading-relaxed">
                  {achievement.description}
                </p>
                
                <div className="space-y-2">
                  {achievement.issuer && (
                    <div className="flex items-center text-sm text-secondary-500">
                      <span className="font-medium">Issued by:</span>
                      <span className="ml-2">{achievement.issuer}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center text-sm text-secondary-500">
                    <span className="font-medium">Date:</span>
                    <span className="ml-2">{achievement.date}</span>
                  </div>
                  
                  {achievement.url && (
                    <a
                      href={achievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how my achievements and expertise can contribute to your next project.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
