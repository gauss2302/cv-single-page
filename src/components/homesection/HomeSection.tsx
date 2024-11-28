import React from 'react';
import styles from './HomeSection.module.css';
import TechStack from '../techsection/TechStack';

interface Skill {
  name: string;
  icon: string;
  description: string;
}

const HomeSection: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'Frontend Development',
      icon: '/icons/main/web.svg',
      description: 'Modern web development'
    },
    {
      name: 'Backend Architecture',
      icon: '/icons/main/back.png',
      description: 'Scalable solutions'
    },
    {
      name: 'Mobile Development',
      icon: '/icons/main/mobile.svg',
      description: 'Cross-platform apps'
    },
    {
      name: 'Architecture Design',
      icon: '/icons/main/data.svg',
      description: 'System design'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800">
  <section className="min-h-screen flex flex-col relative">
    {/* Background circles */}
    <div className="absolute inset-0">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full mix-blend-overlay ${styles[`floatingCircle${i + 1}`]}`}
          style={{
            width: `${400 + i * 150}px`,
            height: `${400 + i * 150}px`,
            backgroundColor: 'rgba(255,255,255,0.08)',
            left: `${10 + i * 20}%`,
            top: `${0 + i * 15}%`
          }}
        />
      ))}
    </div>

    {/* Intro Text Section */}
    <div className="flex-1 flex items-center justify-center">
      <div className="container mx-auto px-4 pt-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            <span className={styles.typing}>Hi, I'm Nikita</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12">
            Full-stack developer crafting digital experiences that make a difference
          </p>
        </div>
      </div>
    </div>

    {/* Tech Stack Section */}
    <div className="flex-1 flex items-center justify-center">
      <div className="container mx-auto px-4 py-10 text-center">
        <div className="max-w-2xl mx-auto">
          <TechStack />
        </div>
      </div>
    </div>
  </section>
</div>
      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="inline-block mb-4">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 object-contain filter invert opacity-70 group-hover:opacity-100
                      group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;