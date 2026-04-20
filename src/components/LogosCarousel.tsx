import { motion } from 'motion/react';

const logos = [
  { name: 'GGF Burger', url: 'https://ik.imagekit.io/jai777/Dharmik/events/ggf%20burger.png' },
  { name: 'Crossword', url: 'https://ik.imagekit.io/jai777/Dharmik/events/Crossword%20.png' },
  { name: 'Dosti', url: 'https://ik.imagekit.io/jai777/Dharmik/events/Dosti%20l.png' },
  { name: 'Client 4', url: 'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-18%20103529.png' },
  { name: 'Head', url: 'https://ik.imagekit.io/jai777/Dharmik/events/Head.png' },
];

export function LogosCarousel() {
  return (
    <section className="pt-6 pb-12 lg:pt-10 lg:pb-20 bg-white overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 md:mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-omnia-black tracking-tight">
          Clients
        </h2>
      </div>
      
      <div className="relative w-full flex items-center">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20 
          }}
        >
          {/* First set of logos */}
          <div className="flex items-center gap-6 md:gap-12 px-3 md:px-6">
            {logos.map((logo, index) => (
              <div key={index} className="w-32 md:w-48 h-16 flex items-center justify-center transition-all duration-300 hover:scale-105">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          {/* Duplicated set for seamless loop */}
          <div className="flex items-center gap-6 md:gap-12 px-3 md:px-6">
            {logos.map((logo, index) => (
              <div key={`dup-${index}`} className="w-32 md:w-48 h-16 flex items-center justify-center transition-all duration-300 hover:scale-105">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
