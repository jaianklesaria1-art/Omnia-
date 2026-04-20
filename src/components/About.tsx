import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 lg:py-32 bg-white relative overflow-hidden">
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
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-omnia-black leading-tight mb-8">
                WE DON'T JUST MARKET.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-omnia-black to-gray-500">WE MAKE AN IMPACT.</span>
              </h3>
              
              <div className="space-y-6 text-gray-600 font-sans text-base md:text-lg leading-relaxed">
                <p>
                  OMNIA is a premium creative agency specializing in marketing, branding, and high-impact activations. We bridge the gap between brands and their audiences through innovative strategies and unforgettable experiences.
                </p>
                <p>
                  From large-scale corporate events to hyper-targeted digital campaigns, our approach is rooted in creativity, driven by data, and executed with precision.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Mission & Vision Blocks */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 bg-gray-50 p-6 md:p-12 border-l-4 border-omnia-red transform md:-translate-x-8 md:translate-y-8"
            >
              <h4 className="text-xl md:text-2xl font-heading font-bold text-omnia-black mb-4 uppercase">Our Mission</h4>
              <p className="text-gray-600 font-sans text-sm md:text-base">
                To empower brands with cutting-edge experiential and digital solutions that drive engagement, foster loyalty, and deliver measurable results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative z-0 bg-white p-6 md:p-12 mt-8 md:mt-0 md:absolute md:top-32 md:right-0 md:w-4/5"
            >
              <h4 className="text-xl md:text-2xl font-heading font-bold text-omnia-black mb-4 uppercase">Our Vision</h4>
              <p className="text-gray-600 font-sans text-sm md:text-base">
                To lead the future of events and marketing by blending creativity, strategy, and innovation to craft experiences that engage, inspire, and convert.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
