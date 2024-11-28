import React, { useEffect, useRef } from 'react';
import styles from './CVSection.module.css';

interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  gpa: string;
}

const CVSection: React.FC = () => {
  const workExperience: WorkExperience[] = [
    {
      company: "Alma Mater",
      role: "Founder",
      period: "Feb 2023 – Present",
      location: "Remote",
      achievements: [
        "Delivered a multi-platform mobile application in Flutter for the Chinese market with BloC, Dio, GetIt.",
        "Created landing page in NextJS for promotion, implementing user acquisition and marketing strategies.",
        "Fully integrated front-end and mobile components with Go backend monolith architecture on Alibaba Cloud infrastructure.",
        "Maintained investor and stakeholder relationships, navigating pivots and product-market fit changes."
      ]
    },
    {
      company: "Quant",
      role: "Middle Flutter Engineer",
      period: "May 2024 – Sep 2024",
      location: "Remote",
      achievements: [
        "Developed new features for CRM system, profile section, and communication chats, integrating with PHP backend.",
        "Refactored legacy code, reducing technical debt by 5% and improving adherence to clean architecture principles.",
        "Led team discussions on new functionality and sprint planning/review, enhancing project efficiency.",
        "Implemented rigorous code review processes, resulting in a 10% decrease in post-release bugs."
      ]
    },
    {
      company: "Digital Creative Asia",
      role: "Junior Flutter Developer",
      period: "Aug 2022 – Oct 2023",
      location: "Shanghai, China",
      achievements: [
        "Delivered Flutter mobile applications, developing new features and optimizing performance.",
        "Integrated front-end with backend services in NodeJS and PHP, ensuring seamless data flow and user experience.",
        "Prepared and released applications on AppStore, Play Store, and Baidu Store.",
        "Conducted code reviews and optimized legacy code, improving overall code quality by 35%."
      ]
    }
  ];

  const education: Education[] = [
    {
      school: "Fudan University",
      degree: "MSc in Economics & Finance",
      period: "July 2023",
      location: "Shanghai, China",
      gpa: "3.34/4.0 GPA"
    },
    {
      school: "Shanghai University",
      degree: "MSc in Finance, Minor in Computer Science",
      period: "September 2021",
      location: "Shanghai, China",
      gpa: "89.28/100.0 GPA"
    }
  ];

  const sectionRefs = {
    experience: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  return (
   <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800">
     <div className="container mx-auto px-4 max-w-4xl">
       {/* Work Experience */}
       <div
         ref={sectionRefs.experience}
         className="mb-16"
       >
         <h2 className="text-3xl font-bold text-white mb-8">
           Work Experience
         </h2>

         <div className="space-y-8">
           {workExperience.map((job) => (
             <div
               key={job.company}
               className={styles.timelineItem}
             >
               <div className={styles.timelineDot} />
               <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-white/20">
                 <div className="flex flex-wrap justify-between items-start mb-4">
                   <div>
                     <h3 className="text-xl font-bold text-white">{job.company}</h3>
                     <p className="text-indigo-300">{job.role}</p>
                     <p className="text-gray-300 text-sm">{job.location}</p>
                   </div>
                   <span className="text-gray-300 text-sm font-medium">{job.period}</span>
                 </div>
                 <ul className="space-y-2 text-gray-200">
                   {job.achievements.map((achievement, i) => (
                     <li key={i} className="flex items-start">
                       <span className="text-indigo-400 mr-2">▪</span>
                       {achievement}
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
           ))}
         </div>
       </div>

       {/* Education */}
       <div
         ref={sectionRefs.education}
       >
         <h2 className="text-3xl font-bold text-white mb-8">
           Education
         </h2>

         <div className="space-y-6">
           {education.map((edu) => (
             <div
               key={edu.school}
               className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-white/20"
             >
               <div className="flex flex-wrap justify-between items-start mb-4">
                 <div>
                   <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                   <p className="text-indigo-300">{edu.degree}</p>
                 </div>
                 <span className="text-gray-300 text-sm font-medium">{edu.period}</span>
               </div>
               <p className="text-gray-200">{edu.gpa} • {edu.location}</p>
             </div>
           ))}
         </div>
       </div>
     </div>
   </section>
 );
};

export default CVSection;