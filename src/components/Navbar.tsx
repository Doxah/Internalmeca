import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-900" />
            <span className="text-xl font-bold text-blue-900">Internalmeca</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Home</a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-900 font-medium transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a href="#precision-machining" className="block px-4 py-2 hover:bg-gray-100">Precision Machining</a>
                <a href="#assembly" className="block px-4 py-2 hover:bg-gray-100">Assembly</a>
                <a href="#quality-control" className="block px-4 py-2 hover:bg-gray-100">Quality Control</a>
              </div>
            </div>
            <a href="#about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">About</a>
            <a href="#security" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Security</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Contact</a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-blue-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-4 right-4 z-50">
            <div className="flex flex-col space-y-3">
              <a 
                href="#home" 
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-900 font-medium py-2"
              >
                Home
              </a>
              <a 
                href="#services" 
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-900 font-medium py-2"
              >
                Services
              </a>
              <a 
                href="#about" 
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-900 font-medium py-2"
              >
                About
              </a>
              <a 
                href="#security" 
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-900 font-medium py-2"
              >
                Security
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-900 font-medium py-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;