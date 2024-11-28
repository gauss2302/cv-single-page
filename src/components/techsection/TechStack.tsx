import React from 'react';
import { TechCategory } from '../../types/tech';
const BASE_URL = '/my-cv/'; 

const skills: TechCategory[] = [
  {
    name: 'Languages',
    items: [
      { name: 'TypeScript', color: '#3178C6', icon: `${BASE_URL}icons/tech/languages/typescript.svg` },
      { name: 'Python', color: '#3776AB', icon: `${BASE_URL}icons/tech/languages/python.svg` },
      { name: 'Golang', color: '#339933', icon: `${BASE_URL}icons/tech/languages/go.svg` },
      { name: 'Dart', color: '#339933', icon: `${BASE_URL}icons/tech/languages/dart.svg` }
    ]
  },
  {
    name: 'Frameworks',
    items: [
      { name: 'Flutter', color: '#61DAFB', icon: `${BASE_URL}icons/tech/frameworks/flutter.svg` },
      { name: 'React', color: '#61DAFB', icon: `${BASE_URL}icons/tech/frameworks/react.svg` },
      { name: 'Vue', color: '#4FC08D', icon: `${BASE_URL}icons/tech/frameworks/vue.svg` },
      { name: 'NextJS', color: '#FF3E00', icon: `${BASE_URL}icons/tech/frameworks/nextjs.svg` }
    ]
  },
  {
    name: 'Databases',
    items: [
      { name: 'PostgreSQL', color: '#4169E1', icon: `${BASE_URL}icons/tech/db/postgresql.svg` },
      { name: 'MySQL', color: '#4169E1', icon: `${BASE_URL}icons/tech/db/mysql.svg` },
      { name: 'Redis', color: '#DC382D', icon: `${BASE_URL}icons/tech/db/redis.svg` },
      { name: 'MongoDB', color: '#4169E1', icon: `${BASE_URL}icons/tech/db/mongodb.svg` }
    ]
  },
  {
    name: 'DevOps & Tools',
    items: [
      { name: 'Docker', color: '#2496ED', icon: `${BASE_URL}icons/tech/tools/docker.svg` },
      { name: 'K8', color: '#2496ED', icon: `${BASE_URL}icons/tech/tools/k8.svg` },
      { name: 'AWS', color: '#FF9900', icon: `${BASE_URL}icons/tech/tools/aws.svg` },
      { name: 'Git', color: '#F05032', icon: `${BASE_URL}icons/tech/tools/git.svg` },
      { name: 'Bash', color: '#FCC624', icon: `${BASE_URL}icons/tech/tools/bash.svg` },
      { name: 'Linux', color: '#FCC624', icon: `${BASE_URL}icons/tech/tools/linux.svg` },
      { name: 'Grafana', color: '#FCC624', icon: `${BASE_URL}icons/tech/tools/grafana.svg` },
      { name: 'Prometheus', color: '#FCC624', icon: `${BASE_URL}icons/tech/tools/prometheus.svg` },
      { name: 'Kafka', color: '#FCC624', icon: `${BASE_URL}icons/tech/tools/kafka.svg` },
      { name: 'RabbitMQ', color: '#FCC624', icon: `${BASE_URL}icons/tech/tools/rabbitmq.svg` }
    ]
  }
];

const TechStack: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 justify-between">
        {/* <h2 className="text-3xl font-bold text-white mb-8">Tech Stack</h2> */}
        <div className="space-y-6 px-1">
          {/* First row: 3 equal columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
            {skills.slice(0, 3).map((category) => (
              <div
                key={category.name}
                className=" bg-white/10backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-6">{category.name}</h3>
                <ul className="space-y-4">
                  {category.items.map((tech) => (
                    <li
                      key={tech.name}
                      className="text-gray-200 flex items-center gap-3 hover:translate-x-2 transition-all duration-300"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-9 h-9 object-contain"
                        style={{ filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.3))' }}
                      />
                      <span className="font-medium">{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Second row: DevOps & Tools centered with 3/4 width */}
          <div className="flex justify-center">
            <div className="w-3/4 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {skills[3].name}
              </h3>
              <div className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
                  {skills[3].items.map((tech) => (
                    <div
                      key={tech.name}
                      className="text-gray-200 flex items-center gap-3 hover:translate-x-2 transition-all duration-300"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-10 h-10 object-contain"
                        style={{ filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.3))' }}
                      />
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;