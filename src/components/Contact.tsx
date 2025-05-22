import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, Shield } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    privacyAgreed: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormState(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        email: '',
        company: '',
        message: '',
        privacyAgreed: false
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Reach out to discuss your aerospace manufacturing needs with our security-enhanced operations
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 bg-blue-900 text-white p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium">Headquarters</h4>
                      <p className="text-blue-100">
                        123 Aerospace Avenue<br />
                        Toulouse, 31000<br />
                        France
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-blue-100">+33 5 12 34 56 78</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-blue-100">contact@internalmeca.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <div className="flex items-center space-x-2 text-sm">
                    <Shield className="h-5 w-5" />
                    <span>Secure Contact Form</span>
                  </div>
                  <p className="mt-2 text-sm text-blue-100">
                    All information submitted through this form is encrypted and handled according to our strict security protocols.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-3 p-8">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Received</h3>
                    <p className="text-gray-600">
                      Thank you for contacting Internalmeca. Our team will review your message and get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-900 focus:border-blue-900"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="privacyAgreed"
                          name="privacyAgreed"
                          checked={formState.privacyAgreed}
                          onChange={handleCheckboxChange}
                          required
                          className="mt-1 h-4 w-4 text-blue-900 border-gray-300 rounded focus:ring-blue-900"
                        />
                        <label htmlFor="privacyAgreed" className="ml-2 block text-sm text-gray-700">
                          I agree that my data will be processed according to Internalmeca's privacy policy and security protocols. *
                        </label>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                    >
                      Submit Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;