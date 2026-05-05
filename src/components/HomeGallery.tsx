import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Masonry from './Masonry';
import { ButtonColorful } from './ButtonColorful';

const galleryItems = [
  {
    id: "home-1",
    img: "https://ik.imagekit.io/jai777/Dharmik/events/FINAL%20REEL%20-%20Trim.mp4",
    url: "/gallery",
    height: 700,
    video: true,
  },
  {
    id: "home-3",
    img: "https://ik.imagekit.io/jai777/Dharmik/events/good%20flippin%20burgers%20pune%20%20-%20Trim.mp4",
    url: "/gallery",
    height: 600,
    video: true,
  },
  {
    id: "home-4",
    img: "https://ik.imagekit.io/jai777/Dharmik/events/dh5.jpeg",
    url: "/gallery",
    height: 700,
  },
  {
    id: "home-5",
    img: "https://ik.imagekit.io/jai777/Dharmik/events/R1%20-%20Trim.mp4",
    url: "/gallery",
    height: 550,
    video: true,
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
