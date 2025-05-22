import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey: From Independent Workshop to Aerotop Integration
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Founded in 1993, Internalmeca began as a small precision machining workshop serving local aerospace suppliers. Over three decades, we built our reputation on quality, precision, and reliability.
            </p>
            
            <p className="text-lg text-gray-600 mb-6">
              In 2023, Aerotop, a CAC40-listed company and recognized Operator of Importance Vitale (OIV), acquired Internalmeca, recognizing our technical expertise and manufacturing capabilities.
            </p>
            
            <p className="text-lg text-gray-600 mb-6">
              This acquisition marks a new chapter in our story, as we enhance our cybersecurity posture and integrate with Aerotop's global aerospace manufacturing network while maintaining our commitment to excellence.
            </p>
            
            <div className="border-l-4 border-blue-900 pl-4 italic text-gray-700 mb-8">
              "Joining Aerotop allows us to maintain our manufacturing excellence while elevating our security and technological capabilities to meet the demanding requirements of the modern aerospace industry."
              <div className="mt-2 font-medium not-italic">— Jean Dupont, Founder of Internalmeca</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Company Timeline</h3>
                
                <div className="space-y-4">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
                        93
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Founded in 1993</h4>
                      <p className="text-gray-600">Established as a precision machining workshop</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
                        05
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">AS9100 Certification in 2005</h4>
                      <p className="text-gray-600">Achieved aerospace quality management certification</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
                        12
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Facility Expansion in 2012</h4>
                      <p className="text-gray-600">Tripled manufacturing capacity with new equipment</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
                        23
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Aerotop Acquisition in 2023</h4>
                      <p className="text-gray-600">Joined the Aerotop group as a specialized subsidiary</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                        24
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Security Enhancement in 2024</h4>
                      <p className="text-gray-600">Implementing OIV-compliant security infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-900 text-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold mb-1">30+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="bg-blue-900 text-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold mb-1">150+</div>
                <div className="text-sm">Employees</div>
              </div>
              <div className="bg-blue-900 text-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold mb-1">20+</div>
                <div className="text-sm">Global Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;