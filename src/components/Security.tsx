import React from 'react';
import { Shield, Lock, Server, Database, FileCode, AlertTriangle } from 'lucide-react';

const securityFeatures = [
  {
    icon: <Lock className="h-8 w-8 text-green-600" />,
    title: 'Data Encryption',
    description: 'All sensitive design and manufacturing data is encrypted both at rest and in transit.'
  },
  {
    icon: <Server className="h-8 w-8 text-green-600" />,
    title: 'Secure Infrastructure',
    description: 'Isolated network infrastructure with advanced intrusion detection and prevention systems.'
  },
  {
    icon: <Database className="h-8 w-8 text-green-600" />,
    title: 'Backup & Recovery',
    description: 'Comprehensive backup protocols with regular testing of restoration procedures.'
  },
  {
    icon: <FileCode className="h-8 w-8 text-green-600" />,
    title: 'Secure Development',
    description: 'Secure coding practices and regular security testing of all manufacturing systems.'
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-green-600" />,
    title: 'Incident Response',
    description: 'Dedicated security team with 24/7 monitoring and rapid incident response capabilities.'
  },
  {
    icon: <Shield className="h-8 w-8 text-green-600" />,
    title: 'Compliance',
    description: 'Full compliance with OIV requirements and aerospace industry security standards.'
  }
];

const Security: React.FC = () => {
  return (
    <section id="security" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
            <Shield className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Enhanced Security Measures</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Commitment to Cybersecurity Excellence
          </h2>
          
          <p className="text-lg text-gray-600">
            As part of Aerotop, an Operator of Importance Vitale (OIV), we've implemented comprehensive cybersecurity measures to protect critical aerospace manufacturing data and ensure business continuity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-900 rounded-lg overflow-hidden shadow-lg">
          <div className="p-8 md:p-12">
            <div className="md:flex items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Security Certification Process
                </h3>
                <p className="text-blue-100 mb-6">
                  Internalmeca is currently undergoing a comprehensive security certification process to meet Aerotop's stringent OIV requirements and aerospace industry standards.
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-white">ISO 27001</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-white">NIST 800-171</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span className="text-white">OIV Compliance</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative h-20 w-20">
                      <div className="absolute inset-0 border-4 border-blue-900 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-green-500 rounded-full" style={{ clipPath: 'polygon(0 0, 75% 0, 75% 100%, 0 100%)' }}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-blue-900">75%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-700 font-medium">
                    Certification Progress
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;