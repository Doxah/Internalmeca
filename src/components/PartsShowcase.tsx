import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const partsData = [
  {
    id: 1,
    name: 'Turbine Blade Component',
    description: 'High-precision titanium component for aerospace turbine applications',
    image: 'https://images.pexels.com/photos/2519217/pexels-photo-2519217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    specs: ['Material: Ti-6Al-4V', 'Tolerance: ±0.0005"', 'Surface Finish: 16 Ra']
  },
  {
    id: 2,
    name: 'Hydraulic Valve Housing',
    description: 'Complex aluminum housing for critical hydraulic systems',
    image: 'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    specs: ['Material: Al 7075-T6', 'Tolerance: ±0.001"', 'Pressure Rating: 5000 psi']
  },
  {
    id: 3,
    name: 'Landing Gear Component',
    description: 'High-strength steel component for aircraft landing systems',
    image: 'https://images.pexels.com/photos/162575/aircraft-landing-gear-jumbo-jet-flaps-162575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    specs: ['Material: 300M Steel', 'Heat Treated', 'Fatigue Tested']
  },
  {
    id: 4,
    name: 'Avionics Housing',
    description: 'EMI-shielded housing for sensitive avionics equipment',
    image: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    specs: ['Material: Al 6061-T6', 'EMI Shielding', 'Environmental Sealing']
  }
];

const PartsShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + partsData.length) % partsData.length);
  };

  const openModal = (image: string) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Precision Aerospace Parts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Examples of our high-precision manufacturing capabilities for critical aerospace applications
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative bg-gray-100 aspect-[16/9]">
              <img
                src={partsData[currentIndex].image}
                alt={partsData[currentIndex].name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button
                onClick={() => openModal(partsData[currentIndex].image)}
                className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
              >
                <ZoomIn className="h-5 w-5 text-gray-900" />
              </button>
            </div>
            
            <div className="bg-white p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{partsData[currentIndex].name}</h3>
              <p className="text-gray-600 mb-4">{partsData[currentIndex].description}</p>
              
              <div className="space-y-2">
                {partsData[currentIndex].specs.map((spec, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <span className="h-2 w-2 bg-blue-900 rounded-full mr-2"></span>
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors z-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray-900" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors z-10"
          >
            <ChevronRight className="h-6 w-6 text-gray-900" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {partsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full mx-2 transition-colors ${
                index === currentIndex ? 'bg-blue-900' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      
      {modalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="max-w-4xl max-h-[90vh] p-2">
            <img 
              src={modalImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PartsShowcase;