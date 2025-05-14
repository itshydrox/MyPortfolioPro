import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Code, Cloud, Server, Database, Shield, Globe } from 'lucide-react';

const About: React.FC = () => {
  const serviceItems = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description: 'Building responsive, interactive, and engaging user interfaces using modern frameworks and libraries.'
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      description: 'Crafting robust server-side applications with secure APIs and efficient data processing.'
    },
    {
      icon: <Database size={24} />,
      title: 'Database Design',
      description: 'Creating optimized data structures and implementing reliable storage solutions for applications.'
    },
    {
      icon: <Cloud size={24} />,
      title: 'Cloud Solutions',
      description: 'Deploying and managing applications on cloud platforms with scalability and reliability in mind.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Security Implementation',
      description: 'Implementing best practices for application security and data protection.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Performance Optimization',
      description: 'Enhancing application speed and efficiency through code optimization and best practices.'
    }
  ];

  return (
    <Section 
      id="about" 
      title="About Me" 
      subtitle="Get to know more about me and what I do"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fadeIn">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Full Stack Developer with a passion for creating exceptional digital experiences
          </h3>
          
          <p className="text-gray-700 dark:text-gray-300">
            With over 6 years of experience in web development, I specialize in building 
            modern, responsive web applications using React, Node.js, and other cutting-edge 
            technologies. My approach combines clean, efficient code with thoughtful user 
            experience design.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            I've worked with startups and established companies across various industries, 
            helping them solve complex problems and deliver high-quality digital products. 
            My background in both frontend and backend development allows me to understand 
            the full development lifecycle and create seamless, integrated solutions.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            When I'm not coding, you'll find me exploring new technologies, contributing to 
            open-source projects, or sharing my knowledge through blog posts and community 
            engagement.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="#contact" variant="primary">
              Contact Me
            </Button>
            <Button href="#" variant="outline">
              Download Resume
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fadeInUp">
          {serviceItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-4">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;