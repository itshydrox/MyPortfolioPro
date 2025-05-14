import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand/Logo Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="text-blue-600">Dev</span>Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Building innovative web solutions with a passion for clean code and elegant user experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Site Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Navigation</h4>
            <nav className="grid grid-cols-2 gap-2">
              <a
                href="#home"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact</h4>
            <address className="not-italic space-y-2 text-gray-600 dark:text-gray-400">
              <p>San Francisco, CA</p>
              <p>
                <a 
                  href="mailto:contact@example.com"
                  className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  contact@example.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+11234567890"
                  className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                >
                  (123) 456-7890
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} DevPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;