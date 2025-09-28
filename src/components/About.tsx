import React from 'react';

const About: React.FC = () => {
  const skills = [
    { name: 'React.js', level: 95, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
    { name: 'Node.js', level: 85, color: 'bg-green-500' },
    { name: 'Python', level: 80, color: 'bg-yellow-500' },
    { name: 'MongoDB', level: 75, color: 'bg-green-600' },
    { name: 'AWS', level: 70, color: 'bg-orange-500' },
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Express',
    'Python', 'Django', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker',
    'Git', 'Tailwind CSS', 'Material-UI', 'Figma', 'Adobe XD'
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            About <span className="text-primary-600">Me</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Get to know more about my journey, skills, and passion for creating amazing digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold text-secondary-900 mb-4">My Story</h3>
              <p className="text-secondary-600 mb-4">
                I'm a passionate full-stack developer with over 3 years of experience in creating 
                digital solutions that make a difference. My journey began with curiosity about 
                how websites work, and it has evolved into a deep love for clean code and 
                innovative problem-solving.
              </p>
              <p className="text-secondary-600 mb-4">
                I specialize in modern web technologies and have a keen eye for design. 
                I believe in creating applications that are not only functional but also 
                provide exceptional user experiences.
              </p>
              <p className="text-secondary-600">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-secondary-600">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-secondary-50 rounded-lg">
                <div className="text-3xl font-bold text-secondary-600 mb-2">3+</div>
                <div className="text-secondary-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-primary-50 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-secondary-600">Client Satisfaction</div>
              </div>
              <div className="text-center p-6 bg-secondary-50 rounded-lg">
                <div className="text-3xl font-bold text-secondary-600 mb-2">24/7</div>
                <div className="text-secondary-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-secondary-900 mb-6">Technical Skills</h3>
            
            {/* Skill Bars */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-700 font-medium">{skill.name}</span>
                    <span className="text-secondary-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-3">
                    <div
                      className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-secondary-900 mb-4">Technologies I Work With</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-secondary-900 mb-6 flex items-center">
              <span className="text-3xl mr-3">🎓</span>
              Education
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-semibold text-secondary-900">Bachelor of Computer Science</h4>
                <p className="text-primary-600 font-medium">University Name</p>
                <p className="text-secondary-600 text-sm">2020 - 2024</p>
                <p className="text-secondary-600 text-sm mt-1">
                  Specialized in Software Engineering and Web Development
                </p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-semibold text-secondary-900">Full Stack Web Development</h4>
                <p className="text-primary-600 font-medium">Online Bootcamp</p>
                <p className="text-secondary-600 text-sm">2023</p>
                <p className="text-secondary-600 text-sm mt-1">
                  Intensive program covering modern web technologies
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-secondary-900 mb-6 flex items-center">
              <span className="text-3xl mr-3">💼</span>
              Experience
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-secondary-500 pl-4">
                <h4 className="font-semibold text-secondary-900">Senior Frontend Developer</h4>
                <p className="text-secondary-600 font-medium">Tech Company</p>
                <p className="text-secondary-600 text-sm">2023 - Present</p>
                <p className="text-secondary-600 text-sm mt-1">
                  Leading frontend development and mentoring junior developers
                </p>
              </div>
              <div className="border-l-4 border-secondary-500 pl-4">
                <h4 className="font-semibold text-secondary-900">Full Stack Developer</h4>
                <p className="text-secondary-600 font-medium">Startup Inc.</p>
                <p className="text-secondary-600 text-sm">2022 - 2023</p>
                <p className="text-secondary-600 text-sm mt-1">
                  Built scalable web applications from scratch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
