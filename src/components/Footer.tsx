import React from 'react';
import { Shield, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Internalmeca</span>
            </div>
            <p className="text-gray-400 mb-4">
              Precision aerospace manufacturing with enhanced security, now part of the Aerotop Group.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#precision-machining" className="text-gray-400 hover:text-white transition-colors">
                  Precision Machining
                </a>
              </li>
              <li>
                <a href="#assembly" className="text-gray-400 hover:text-white transition-colors">
                  Assembly Services
                </a>
              </li>
              <li>
                <a href="#quality-control" className="text-gray-400 hover:text-white transition-colors">
                  Quality Control
                </a>
              </li>
              <li>
                <a href="#rd-support" className="text-gray-400 hover:text-white transition-colors">
                  R&D Support
                </a>
              </li>
              <li>
                <a href="#security" className="text-gray-400 hover:text-white transition-colors">
                  Secure Manufacturing
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Security Statement
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Internalmeca. All rights reserved. A part of Aerotop Group.
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1 text-green-500" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1 text-green-500" />
                <span>AS9100 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;