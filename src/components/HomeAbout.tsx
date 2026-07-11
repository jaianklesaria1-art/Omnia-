import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ButtonColorful } from './ButtonColorful';

export function HomeAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about-preview" className="pt-16 lg:pt-32 pb-10 lg:pb-16 bg-[#ffffff] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-omnia-red/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-heading text-omnia-red uppercase tracking-[0.3em] mb-4">Who We Are</h2>
              <h3 className="text-3xl md:text-5xl lg:text-5xl font-heading font-black text-omnia-black leading-tight mb-8 uppercase">
                WE DON'T JUST MARKET.<br />
                <span className="text-omnia-black">WE MAKE AN IMPACT.</span>
              </h3>
              
              <div className="space-y-6 text-omnia-black font-sans text-base md:text-lg leading-relaxed mb-10">
                <p>
                  OMNIA is a premium creative agency specializing in marketing, branding, and high-impact activations. We bridge the gap between brands and their audiences through innovative strategies and unforgettable experiences.
                </p>
              </div>

              <ButtonColorful 
                href="/about"
                label="Know More About Us"
              />
            </motion.div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative block w-full mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] w-full"
            >
              <img 
                src="https://ik.imagekit.io/yz2cyub4s/TWF_2104%20(1).JPG?updatedAt=1782204581508&tr=orig-true" 
                alt="Creative Agency" 
                className="w-full h-full object-cover rounded-lg shadow-xl transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-2 border-omnia-red translate-x-4 translate-y-4 -z-10 rounded-lg" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
