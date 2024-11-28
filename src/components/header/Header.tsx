import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const title = "Nikita Shilov";
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMobileMenuOpen(false);
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 shadow-lg"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-20">
            {/* Brand */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="text-lg font-light tracking-widest uppercase text-white hover:text-gray-200 transition-colors duration-200"
            >
              {title}
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-12">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`${styles.navItem} text-sm tracking-wider uppercase transition-colors duration-200 relative
                    ${activeSection === item.href.substring(1) 
                      ? 'text-white' 
                      : 'text-gray-200 hover:text-white'}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-white hover:text-gray-200 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="container mx-auto px-4 py-2">
              <div className="bg-indigo-900/90 backdrop-blur-sm rounded-lg">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`block py-3 px-4 text-sm font-light tracking-wider uppercase transition-colors
                      ${activeSection === item.href.substring(1) 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'}`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};

export default Header;