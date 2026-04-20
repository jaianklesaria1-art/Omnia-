import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const stats = [
  { value: '100+', label: 'Satisfied Clients' },
  { value: '3000+', label: 'Projects Delivered' },
  { value: 'PAN', label: 'India Network' },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-8 lg:py-12 bg-white relative border-y border-black/5">
      {/* Decorative abstract blob to make the translucency visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-omnia-red/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-black/5 rounded-3xl py-8 md:py-10 px-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-3xl md:text-5xl font-heading font-black text-omnia-black mb-1 drop-shadow-sm">
                {stat.value}
              </h3>
              <p className="text-gray-600 font-sans uppercase tracking-[0.2em] text-xs font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
