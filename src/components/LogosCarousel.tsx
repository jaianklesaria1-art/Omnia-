import { motion } from 'motion/react';

const logos = [
  { name: 'Multispace Developer', url: 'https://ik.imagekit.io/yz2cyub4s/CLIENTS/Multispace%20developer%20logo.png?updatedAt=1782902511919' },
  { name: 'Kamla Group', url: 'https://ik.imagekit.io/yz2cyub4s/CLIENTS/Kamla%20Group%20logo.png?updatedAt=1782902511791' },
  { name: 'Raunak Group', url: 'https://ik.imagekit.io/yz2cyub4s/CLIENTS/Raunak%20group%20logo.png?updatedAt=1782902482319' },
  { name: 'Dosti Realty', url: 'https://ik.imagekit.io/yz2cyub4s/CLIENTS/DOSTI%20logo.jpg?updatedAt=1782902135625' },
  { name: 'Mayfair Housing', url: 'https://ik.imagekit.io/yz2cyub4s/CLIENTS/Mayfair%20logo.png?updatedAt=1782902135630' },
  { name: 'Vascon Group', url: 'https://ik.imagekit.io/yz2cyub4s/CLIENTS/Vascon%20group.jpg?updatedAt=1782902135423' },
  { name: 'Good Flippin Burgers', url: 'https://ik.imagekit.io/yz2cyub4s/CLIENTS/gfb-logo-new.png?updatedAt=1782902135412' },
];

export function LogosCarousel() {
  return (
    <section className="pt-6 pb-12 lg:pt-10 lg:pb-20 bg-[#ffffff] overflow-hidden border-t border-black/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 md:mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-omnia-black tracking-tight">
          Clients
        </h2>
      </div>
      
      <div className="relative w-full flex items-center">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#ffffff] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#ffffff] to-transparent z-10 pointer-events-none" />
        
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
