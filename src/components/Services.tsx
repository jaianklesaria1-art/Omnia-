import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

const serviceCategories = [
  {
    title: 'Event Services',
    image: 'https://picsum.photos/seed/event/1200/800?blur=2',
    items: [
      'Event Planning & Management',
      'Corporate Events',
      'Brand Activation & Promotions',
      'Trussing & Rigging',
      'Social Events',
      'Exhibitions & Trade Shows',
      'Artist Management',
      'Audio & Visuals'
    ]
  },
  {
    title: 'BTL Services',
    image: 'https://picsum.photos/seed/btl/1200/800?blur=2',
    items: [
      'Retail Activation',
      'Mall Activation',
      'Cab Branding',
      'Auto Branding',
      'Pole Branding',
      'Printing & Fabrication',
      'Corporate Activation',
      'Newspaper Inserts'
    ]
  },
  {
    title: 'ATL Services',
    image: 'https://picsum.photos/seed/atl/1200/800?blur=2',
    items: [
      'Television Advertising',
      'Radio Campaigns',
      'Print Media',
      'Cinema Advertising',
      'National PR Campaigns'
    ]
  },
  {
    title: 'Digital Marketing',
    image: 'https://picsum.photos/seed/digital/1200/800?blur=2',
    items: [
      'Branding & Strategy',
      'Content Creation',
      'Social Media Marketing',
      'Logo & Graphic Designing',
      'SEO',
      'Website & App Development',
      'WhatsApp & Email Marketing',
      'Influencer Marketing'
    ]
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Massive Background Text like Mayvel */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-5 select-none flex">
        <h2 className="text-[20vw] font-heading font-black text-omnia-black whitespace-nowrap leading-none">
          SERVICES SERVICES
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-24 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-heading text-omnia-red uppercase tracking-[0.3em] mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-6xl lg:text-7xl font-heading font-black text-omnia-black uppercase tracking-tighter"
          >
            Core Services
          </motion.h3>
        </div>

        <div ref={ref} className="flex flex-col mb-32 relative">
          {/* Hover Background Image Reveal */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden md:block opacity-40">
            {serviceCategories.map((category, index) => (
              <motion.img
                key={`bg-${index}`}
                src={category.image}
                alt={category.title}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 1.1
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ))}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
          </div>

          {/* List Items */}
          <div className="relative z-10 flex flex-col border-t border-black/10">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group border-b border-black/10 py-12 cursor-pointer transition-colors hover:bg-black/5"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-4">
                  <div className="md:col-span-5">
                    <h4 className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-omnia-black uppercase tracking-tighter group-hover:text-omnia-red transition-colors duration-300">
                      {category.title}
                    </h4>
                  </div>
                  <div className="md:col-span-7">
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                      {category.items.map((item, i) => (
                        <span key={i} className="text-gray-600 font-sans text-sm md:text-base flex items-center group-hover:text-omnia-black transition-colors">
                          <span className="text-omnia-red mr-2 text-xs">■</span>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Innovation & Experiential Marketing Section */}
        <InnovationSection />

      </div>
    </section>
  );
}

function InnovationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const innovationItems = [
    { title: 'Creative Strategy & Ideation', desc: 'Concept development and brainstorming unique ideas' },
    { title: 'Campaign Design & Development', desc: 'Crafting immersive, multi-sensory experiences' },
    { title: 'Digital & Interactive Installations', desc: 'Use of AR, VR, or interactive displays' },
    { title: 'Event Activation', desc: 'Live events, pop-ups, and brand activations' },
    { title: 'Technology Integration', desc: 'Social media engagement, mobile apps, and data-driven analytics' },
  ];

  return (
    <div ref={ref} className="pt-20 border-t border-black/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-heading text-omnia-red uppercase tracking-[0.3em] mb-4">The Future</h2>
          <h3 className="text-2xl md:text-4xl font-heading font-black text-omnia-black leading-tight mb-10 uppercase">
            Innovation &<br />Experiential Marketing
          </h3>
          
          <div className="space-y-8">
            {innovationItems.map((item, index) => (
              <div key={index} className="group cursor-default">
                <h4 className="text-xl font-heading font-bold text-omnia-black mb-2 group-hover:text-omnia-red transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Visuals - Stacked Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[600px] w-full"
        >
          {/* Card 1 */}
          <motion.div 
            whileHover={{ scale: 1.05, zIndex: 30 }}
            className="absolute top-0 right-0 w-4/5 h-64 bg-gray-50 shadow-2xl overflow-hidden border border-black/10 z-10"
          >
            <img src="https://picsum.photos/seed/experiential/800/600" alt="Experiential" referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 text-white font-heading text-xs uppercase tracking-wider">Experiential Campaign</div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ scale: 1.05, zIndex: 30 }}
            className="absolute top-1/3 left-0 w-4/5 h-64 bg-gray-50 shadow-2xl overflow-hidden border border-black/10 z-20"
          >
            <img src="https://picsum.photos/seed/billboard/800/600" alt="Billboard" referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 text-white font-heading text-xs uppercase tracking-wider">Outdoor Activation</div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            whileHover={{ scale: 1.05, zIndex: 30 }}
            className="absolute bottom-0 right-10 w-3/4 h-64 bg-gray-50 shadow-2xl overflow-hidden border border-black/10 z-10"
          >
            <img src="https://picsum.photos/seed/immersive/800/600" alt="Immersive Event" referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 text-white font-heading text-xs uppercase tracking-wider">Immersive Scene</div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
