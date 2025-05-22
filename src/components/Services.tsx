import React from 'react';
import { Settings, Layers, Activity, BarChart3, Search, Shield } from 'lucide-react';

const serviceData = [
  {
    icon: <Settings className="h-10 w-10 text-blue-900" />,
    title: 'Precision Machining',
    description: 'State-of-the-art CNC machining for complex aerospace components with tolerances as tight as ±0.0005".',
    features: ['5-Axis CNC Machining', 'EDM Processing', 'Precision Grinding']
  },
  {
    icon: <Layers className="h-10 w-10 text-blue-900" />,
    title: 'Assembly Services',
    description: 'Complete assembly capabilities for aerospace subsystems and components in clean room environments.',
    features: ['Clean Room Assembly', 'Subsystem Integration', 'Functional Testing']
  },
  {
    icon: <Activity className="h-10 w-10 text-blue-900" />,
    title: 'Quality Control',
    description: 'Comprehensive inspection and testing to ensure compliance with the strictest aerospace standards.',
    features: ['CMM Inspection', 'Non-Destructive Testing', 'Material Certification']
  },
  {
    icon: <Search className="h-10 w-10 text-blue-900" />,
    title: 'R&D Support',
    description: 'Engineering support for prototype development and material selection for aerospace applications.',
    features: ['Rapid Prototyping', 'Material Analysis', 'Design for Manufacturability']
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-blue-900" />,
    title: 'Production Scaling',
    description: 'Efficient production scaling from prototype to full-scale manufacturing with consistent quality.',
    features: ['Lean Manufacturing', 'Just-in-Time Delivery', 'Supply Chain Management']
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-900" />,
    title: 'Secure Manufacturing',
    description: 'Enhanced cybersecurity protocols protecting sensitive design data and manufacturing processes.',
    features: ['Secure Data Handling', 'OIV Compliance', 'Access Control Systems']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Aerospace Manufacturing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized manufacturing capabilities for critical aerospace components with enhanced security protocols
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="h-2 w-2 bg-blue-900 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition-colors duration-300"
          >
            Request Custom Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;