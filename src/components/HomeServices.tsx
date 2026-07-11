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
    image: 'https://ik.imagekit.io/yz2cyub4s/SERVICES/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM.jpeg?updatedAt=1782902864394',
    images: [
      'https://ik.imagekit.io/yz2cyub4s/SERVICES/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM.jpeg?updatedAt=1782902864394',
      'https://ik.imagekit.io/yz2cyub4s/SERVICES/m-s-round-truss.jpg?updatedAt=1782902705388',
      'https://ik.imagekit.io/yz2cyub4s/SERVICES/1746782475_f4af5814b95e5df25de4.jpeg?updatedAt=1782902705352'
    ],
    subItems: ['Event Planning', 'Corporate Events', 'Brand Activation']
  },
  {
    link: '/services',
    text: 'BTL Services',
    image: 'https://ik.imagekit.io/yz2cyub4s/SERVICES/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM%20(4).jpeg?updatedAt=1782902863770',
    images: [
      'https://ik.imagekit.io/yz2cyub4s/SERVICES/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM%20(4).jpeg?updatedAt=1782902863770',
      'https://ik.imagekit.io/yz2cyub4s/SERVICES/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM%20(5).jpeg?updatedAt=1782902863782',
      'https://ik.imagekit.io/yz2cyub4s/SERVICES/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM%20(2).jpeg?updatedAt=1782902863773'
    ],
    subItems: ['Retail Activation', 'Mall Activation', 'Cab Branding']
  },
  {
    link: '/services',
    text: 'ATL Services',
    image: 'https://ik.imagekit.io/yz2cyub4s/SERVICES/M4G_Thumbnail_1000x600_knorr-x-squidd-games.jpg?updatedAt=1782902705390',
    images: [
      'https://ik.imagekit.io/yz2cyub4s/SERVICES/M4G_Thumbnail_1000x600_knorr-x-squidd-games.jpg?updatedAt=1782902705390',
      'https://ik.imagekit.io/yz2cyub4s/SERVICES/1_V8pFvJpw7KRAJ3QNWKx9KA.jpg?updatedAt=1782902705335',
      'https://ik.imagekit.io/yz2cyub4s/SERVICES/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM%20(9).jpeg?updatedAt=1782902864174'
    ],
    subItems: ['Television Advertising', 'Radio Campaigns', 'Print Media']
  },
  {
    link: '/services',
    text: 'Digital Marketing',
    image: 'https://ik.imagekit.io/yz2cyub4s/SERVICES/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM%20(11).jpeg?updatedAt=1782902864252',
    images: [
      'https://ik.imagekit.io/yz2cyub4s/SERVICES/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM%20(11).jpeg?updatedAt=1782902864252',
      'https://ik.imagekit.io/yz2cyub4s/SERVICES/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM%20(12).jpeg?updatedAt=1782902864375',
      'https://ik.imagekit.io/yz2cyub4s/SERVICES/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM%20(10).jpeg?updatedAt=1782902864257'
    ],
    subItems: ['Branding & Strategy', 'Social Media', 'SEO & SEM']
  }
];

export function HomeServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-8 lg:py-12 bg-[#ffffff] relative overflow-hidden border-t border-black/5">
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
            textColor="#0f0f0f"
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
