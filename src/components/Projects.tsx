import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern UI/UX',
      longDescription: 'Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. The platform supports multiple payment methods and includes real-time inventory management.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'web',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      longDescription: 'Developed a real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking. Includes notification system and file sharing capabilities.',
      image: '📋',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'Material-UI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'web',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with location-based forecasts',
      longDescription: 'Created a responsive weather dashboard that provides current weather conditions, 7-day forecasts, and weather maps. Features location-based services, weather alerts, and beautiful animations.',
      image: '🌤️',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js', 'CSS3'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'web',
      featured: false
    },
    {
      id: 4,
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot with natural language processing',
      longDescription: 'Built an AI-powered chat assistant using machine learning algorithms for natural language understanding. Features context awareness, multi-language support, and integration with various APIs.',
      image: '🤖',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'WebSocket'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'ai',
      featured: true
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Personal portfolio with modern design and animations',
      longDescription: 'Designed and developed a responsive portfolio website showcasing projects, skills, and achievements. Features smooth animations, dark mode, and optimized performance.',
      image: '💼',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'web',
      featured: false
    },
    {
      id: 6,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric auth',
      longDescription: 'Developed a secure mobile banking application with biometric authentication, transaction history, bill payments, and money transfer features. Includes real-time notifications and fraud detection.',
      image: '🏦',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Biometric Auth'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'mobile',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            My <span className="text-primary-600">Projects</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-secondary-900 mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-secondary-900 mb-2">{project.title}</h4>
                  <p className="text-secondary-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-secondary-100 text-secondary-600 rounded text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-secondary-200 hover:bg-secondary-300 text-secondary-800 text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects with Filter */}
        <div>
          <h3 className="text-2xl font-semibold text-secondary-900 mb-8 text-center">All Projects</h3>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-secondary-600 hover:bg-primary-50 hover:text-primary-600 shadow-md'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-32 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-secondary-900 mb-2">{project.title}</h4>
                  <p className="text-secondary-600 mb-3 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-2 py-1 bg-secondary-100 text-secondary-600 rounded text-xs">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-3 rounded text-xs font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-secondary-200 hover:bg-secondary-300 text-secondary-800 text-center py-2 px-3 rounded text-xs font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-secondary-900">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-secondary-400 hover:text-secondary-600 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center text-6xl mb-6">
                  {selectedProject.image}
                </div>
                
                <p className="text-secondary-600 mb-6">{selectedProject.longDescription}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-center"
                  >
                    View Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-center"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
