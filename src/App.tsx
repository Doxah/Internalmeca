import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Security from './components/Security';
import PartsShowcase from './components/PartsShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Internalmeca | Precision Aerospace Manufacturing';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <PartsShowcase />
      <Security />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;