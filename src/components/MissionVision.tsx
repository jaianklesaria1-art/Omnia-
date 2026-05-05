import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative px-6 md:px-12 max-w-7xl mx-auto pt-10 lg:pt-16 pb-8 lg:pb-12 bg-[#ffffff]">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="bg-[#ffffff] p-6 md:p-16 border-l-4 border-omnia-red hover:bg-black/5 transition-colors"
        >
          <h4 className="text-2xl md:text-3xl font-heading font-black text-omnia-black mb-6 uppercase">Our Mission</h4>
          <p className="text-omnia-black font-sans text-base md:text-lg leading-relaxed">
            Deliver innovative, end-to-end marketing solutions that elevate brand presence and drive measurable results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#ffffff] p-6 md:p-16 hover:bg-[#ffffff] transition-colors"
        >
          <h4 className="text-2xl md:text-3xl font-heading font-black text-omnia-black mb-6 uppercase">Our Vision</h4>
          <p className="text-omnia-black font-sans text-base md:text-lg leading-relaxed">
            To lead the future of events and marketing by blending creativity, strategy, and innovation to craft experiences that engage, inspire, and convert.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
