import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

const expandedServices = [
  {
    title: 'Event',
    subtitle: 'Event Management',
    image: 'https://picsum.photos/seed/event/1200/800?blur=2',
    description: 'End-to-end event planning and execution for corporate and public gatherings.',
    items: [
      'Corporate Events',
      'Product Launches',
      'Exhibitions & Trade Shows',
      'Conferences & Seminars',
      'Live Concerts'
    ]
  },
  {
    title: 'BTL',
    subtitle: 'Below The Line Marketing',
    image: 'https://picsum.photos/seed/btl/1200/800?blur=2',
    description: 'Targeted, direct marketing activities focused on conversions and direct engagement.',
    items: [
      'Retail & Mall Activation',
      'Cab & Auto Branding',
      'Pole & Transit Branding',
      'Printing & Fabrication',
      'Corporate Activation',
      'Newspaper Inserts'
    ]
  },
  {
    title: 'ATL',
    subtitle: 'Above The Line Marketing',
    image: 'https://picsum.photos/seed/atl/1200/800?blur=2',
    description: 'Mass media strategies designed to build brand awareness and reach a wide audience.',
    items: [
      'Television Advertising',
      'Radio Campaigns',
      'Print Media (Newspapers & Magazines)',
      'Cinema Advertising',
      'National PR Campaigns'
    ]
  },
  {
    title: 'Digital Marketing',
    subtitle: 'Performance & Brand',
    image: 'https://picsum.photos/seed/digital/1200/800?blur=2',
    description: 'Data-driven digital strategies to maximize your online presence and ROI.',
    items: [
      'Branding & Strategy',
      'Social Media Marketing',
      'SEO & SEM',
      'Website & App Development',
      'WhatsApp & Email Marketing',
      'Influencer Marketing'
    ]
  },
  {
    title: 'Corporate Gifting',
    subtitle: 'Premium Merchandise',
    image: 'https://picsum.photos/seed/gifting/1200/800?blur=2',
    description: 'Curated, high-quality gifting solutions for clients, partners, and employees.',
    items: [
      'Custom Branded Merchandise',
      'Festive Gift Hampers',
      'Employee Onboarding Kits',
      'Luxury Client Gifts',
      'Eco-Friendly Products'
    ]
  },
  {
    title: 'Innovation & Experiential Marketing',
    subtitle: 'The Future',
    image: 'https://picsum.photos/seed/experiential/1200/800?blur=2',
    description: 'Immersive, multi-sensory experiences and technology-driven activations.',
    items: [
      'Creative Strategy & Ideation',
      'Campaign Design & Development',
      'Digital & Interactive Installations',
      'Event Activation',
      'Technology Integration'
    ]
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full bg-white pt-24 lg:pt-40 relative overflow-hidden">
      {/* Massive Background Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-5 select-none flex justify-center">
        <h2 className="text-[18vw] lg:text-[20vw] font-heading font-black text-omnia-black whitespace-nowrap leading-none tracking-tighter">
          SERVICES
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pb-16 lg:pb-32">
        
        {/* Page Hero */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-heading text-omnia-red uppercase tracking-[0.3em] mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-omnia-black uppercase tracking-tighter leading-[1.1]"
          >
            Comprehensive<br />Solutions.
          </motion.h3>
        </div>

        {/* Services List */}
        <div ref={ref} className="flex flex-col relative">
          {/* Hover Background Image Reveal */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden md:block opacity-40">
            {expandedServices.map((category, index) => (
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
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
          </div>

          {/* List Items */}
          <div className="relative z-10 flex flex-col border-t border-black/10">
            {expandedServices.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group border-b border-black/10 py-12 cursor-pointer transition-colors hover:bg-black/5"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start px-4">
                  <div className="lg:col-span-4">
                    <h4 className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-omnia-black uppercase tracking-tighter group-hover:text-omnia-red transition-colors duration-300 mb-2">
                      {category.title}
                    </h4>
                    <p className="text-omnia-red font-sans text-sm uppercase tracking-widest font-bold">
                      {category.subtitle}
                    </p>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-gray-600 font-sans text-base md:text-lg mb-6 max-w-2xl">
                      {category.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {category.items.map((item, i) => (
                        <span key={i} className="text-gray-600 font-sans text-sm md:text-base flex items-center group-hover:text-omnia-black transition-colors">
                          <span className="text-omnia-red mr-3 text-xs">■</span>
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

      </div>
    </div>
  );
}
