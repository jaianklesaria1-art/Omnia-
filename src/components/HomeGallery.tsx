import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Masonry from './Masonry';
import { ButtonColorful } from './ButtonColorful';

const galleryItems = [
  {
    id: "home-1",
    img: "https://ik.imagekit.io/yz2cyub4s/VideoCapture_20241224-223220.jpg?updatedAt=1782907338617",
    url: "/gallery",
    height: 600,
  },
  {
    id: "home-2",
    img: "https://ik.imagekit.io/yz2cyub4s/DSC_9976.JPG?updatedAt=1782204686229",
    url: "/gallery",
    height: 480,
  },
  {
    id: "home-3",
    img: "https://ik.imagekit.io/yz2cyub4s/WhatsApp%20Image%202026-07-01%20at%204.31.10%20PM.jpeg?updatedAt=1782903737186",
    url: "/gallery",
    height: 650,
  },
  {
    id: "home-4",
    img: "https://ik.imagekit.io/yz2cyub4s/TWF_2104%20(1).JPG?updatedAt=1782204581508",
    url: "/gallery",
    height: 500,
  },
  {
    id: "home-5",
    img: "https://ik.imagekit.io/yz2cyub4s/WhatsApp%20Image%202026-07-01%20at%204.22.26%20PM.jpeg?updatedAt=1782903336229",
    url: "/gallery",
    height: 550,
  },
  {
    id: "home-6",
    img: "https://ik.imagekit.io/yz2cyub4s/IMG-20240729-WA0066.jpg?updatedAt=1782204339380",
    url: "/gallery",
    height: 600,
  },
  {
    id: "home-7",
    img: "https://ik.imagekit.io/yz2cyub4s/TWF_1896%20(1).JPG?updatedAt=1782204578666",
    url: "/gallery",
    height: 500,
  },
  {
    id: "home-8",
    img: "https://ik.imagekit.io/yz2cyub4s/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM%20(15).jpeg?updatedAt=1782902903803",
    url: "/gallery",
    height: 650,
  },
];

export function HomeGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-12 pb-4 lg:pt-20 lg:pb-8 bg-[#ffffff] relative overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-8 md:mb-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-heading text-omnia-red uppercase tracking-[0.3em] mb-4"
          >
            Our Work
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-omnia-black uppercase tracking-tighter mb-8"
          >
            Gallery
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <ButtonColorful 
              href="/gallery"
              label="View Full Gallery"
            />
          </motion.div>
        </div>
        
        <div ref={ref} className="w-full relative mt-8 pb-8">
          <Masonry
            items={galleryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
            colorShiftOnHover={false}
          />
        </div>
      </div>
    </section>
  );
}
