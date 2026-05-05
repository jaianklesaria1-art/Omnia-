import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ButtonColorful } from './ButtonColorful';

export function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-32 bg-[#ffffff] relative overflow-hidden border-y border-black/5">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-omnia-red via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-omnia-black mb-4 md:mb-6 tracking-tighter">
              Confused?
            </h2>
            <h3 className="text-lg md:text-2xl font-heading font-bold text-omnia-black mb-3 md:mb-4 leading-tight">
              We can help you plan the perfect campaign!
            </h3>
            <p className="text-omnia-black font-sans text-base md:text-lg mb-8 md:mb-10">
              Hire our expert media planners to find, plan and place your next promotion.
            </p>
            
            <ButtonColorful 
              href="/contact"
              label="Contact Us"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end relative"
          >
            <div className="relative w-full max-w-sm aspect-square md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-05-04%20185612.png" 
                alt="Confused about your campaign? We can help."
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
