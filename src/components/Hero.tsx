import React, { useEffect, useRef } from 'react';
import { ArrowDown, Shield, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.3
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30, 58, 138, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw connections between particles
      particles.forEach((particleA, indexA) => {
        particles.slice(indexA + 1).forEach(particleB => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.strokeStyle = `rgba(30, 58, 138, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent z-10" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="mb-6 flex items-center justify-center space-x-2 text-blue-900 bg-blue-100 px-4 py-2 rounded-full">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-medium">Now part of Aerotop Group</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Precision Aerospace Manufacturing <span className="text-blue-900">With Enhanced Security</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
            Internalmeca delivers high-precision aerospace components with the highest standards of quality, reliability, and now with industry-leading cybersecurity protocols.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#services" 
              className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center"
            >
              Explore Our Services
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-900 font-medium rounded-md border border-blue-900 transition-colors duration-300 flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 animate-bounce">
        <a href="#services" className="text-gray-500 hover:text-blue-900 transition-colors">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 bg-white/80 backdrop-blur-sm rounded-t-lg">
            <div className="flex items-center space-x-3 p-4">
              <Shield className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-medium text-gray-900">Enhanced Security</h3>
                <p className="text-sm text-gray-600">ISO 27001 & OIV Compliant</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4">
              <Award className="h-8 w-8 text-blue-900" />
              <div>
                <h3 className="font-medium text-gray-900">Premium Quality</h3>
                <p className="text-sm text-gray-600">AS9100 Certified</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4">
              <div className="h-8 w-8 flex items-center justify-center bg-blue-900 text-white rounded-full">
                <span className="font-bold">30+</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Years of Experience</h3>
                <p className="text-sm text-gray-600">Trusted by Leading OEMs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;