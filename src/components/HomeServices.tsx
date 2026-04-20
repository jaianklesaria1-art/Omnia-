import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import FlowingMenu from './FlowingMenu';
import { ButtonColorful } from './ButtonColorful';

const previewServices = [
  {
    link: '/services',
    text: 'Events',
    image: 'https://ik.imagekit.io/jai777/Dharmik/events/Eve4.jpeg?updatedAt=1776271831767&tr=w-800',
    subItems: ['Event Planning', 'Corporate Events', 'Brand Activation']
  },
  {
    link: '/services',
    text: 'BTL Services',
    image: 'https://ik.imagekit.io/jai777/Dharmik/events/Eve3.jpeg?updatedAt=1776271832260&tr=w-800',
    subItems: ['Retail Activation', 'Mall Activation', 'Cab Branding']
  },
  {
    link: '/services',
    text: 'ATL Services',
    image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh5.jpeg?updatedAt=1776498402048&tr=w-800',
    subItems: ['Television Advertising', 'Radio Campaigns', 'Print Media']
  },
  {
    link: '/services',
    text: 'Digital Marketing',
    image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh1.jpeg?updatedAt=1776498402003&tr=w-800',
    subItems: ['Branding & Strategy', 'Social Media', 'SEO & SEM']
  }
];

export function HomeServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-8 lg:py-12 bg-white relative overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-heading text-omnia-red uppercase tracking-[0.3em] mb-4"
            >
              What We Do
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-omnia-black uppercase tracking-tighter"
            >
              Core Services
            </motion.h3>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ButtonColorful 
              href="/services"
              label="View All Services"
            />
          </motion.div>
        </div>

        <div ref={ref} className="relative w-full border-t border-black/10">
          <FlowingMenu 
            items={previewServices}
            speed={15}
            textColor="#060010"
            bgColor="transparent"
            marqueeBgColor="#E30613"
            marqueeTextColor="#ffffff"
            borderColor="rgba(0,0,0,0.1)"
          />
        </div>

      </div>
    </section>
  );
}
