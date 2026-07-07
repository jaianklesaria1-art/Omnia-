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
    image: 'https://ik.imagekit.io/yz2cyub4s/DSC_9976.JPG?updatedAt=1782204686229',
    images: [
      'https://ik.imagekit.io/yz2cyub4s/DSC_9976.JPG?updatedAt=1782204686229',
      'https://ik.imagekit.io/yz2cyub4s/TWF_2104%20(1).JPG?updatedAt=1782204581508',
      'https://ik.imagekit.io/yz2cyub4s/TWF_1896%20(1).JPG?updatedAt=1782204578666'
    ],
    subItems: ['Event Planning', 'Corporate Events', 'Brand Activation']
  },
  {
    link: '/services',
    text: 'BTL Services',
    image: 'https://ik.imagekit.io/yz2cyub4s/WhatsApp%20Image%202026-07-01%20at%204.31.10%20PM.jpeg?updatedAt=1782903737186',
    images: [
      'https://ik.imagekit.io/yz2cyub4s/WhatsApp%20Image%202026-07-01%20at%204.31.10%20PM.jpeg?updatedAt=1782903737186',
      'https://ik.imagekit.io/yz2cyub4s/WhatsApp%20Image%202026-07-01%20at%204.31.11%20PM%20(1).jpeg?updatedAt=1782903737137',
      'https://ik.imagekit.io/yz2cyub4s/WhatsApp%20Image%202026-07-01%20at%204.22.26%20PM.jpeg?updatedAt=1782903336229'
    ],
    subItems: ['Retail Activation', 'Mall Activation', 'Cab Branding']
  },
  {
    link: '/services',
    text: 'ATL Services',
    image: 'https://ik.imagekit.io/yz2cyub4s/VideoCapture_20241224-223220.jpg?updatedAt=1782907338617',
    images: [
      'https://ik.imagekit.io/yz2cyub4s/VideoCapture_20241224-223220.jpg?updatedAt=1782907338617',
      'https://ik.imagekit.io/yz2cyub4s/IMG-20240729-WA0066.jpg?updatedAt=1782204339380',
      'https://ik.imagekit.io/yz2cyub4s/TWF_2193.JPG?updatedAt=1782204578570'
    ],
    subItems: ['Television Advertising', 'Radio Campaigns', 'Print Media']
  },
  {
    link: '/services',
    text: 'Digital Marketing',
    image: 'https://ik.imagekit.io/yz2cyub4s/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM%20(15).jpeg?updatedAt=1782902903803',
    images: [
      'https://ik.imagekit.io/yz2cyub4s/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM%20(15).jpeg?updatedAt=1782902903803',
      'https://ik.imagekit.io/yz2cyub4s/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM%20(16).jpeg?updatedAt=1782902903743',
      'https://ik.imagekit.io/yz2cyub4s/WhatsApp%20Image%202026-07-01%20at%204.22.26%20PM%20(1).jpeg?updatedAt=1782903336109'
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
