import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import CircularGallery from '../components/CircularGallery';
import Masonry from '../components/Masonry';

const galleryItems = [
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh9.jpeg?updatedAt=1776498402099' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh8.jpeg?updatedAt=1776498402009' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh7.jpeg?updatedAt=1776498402026' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh6.jpeg?updatedAt=1776498402026' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh5.jpeg?updatedAt=1776498402048' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh4.jpeg?updatedAt=1776498402039' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh11V.mp4?updatedAt=1776498406658' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh1.jpeg?updatedAt=1776498402003' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20195145.png?updatedAt=1777575136275' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20193914.png?updatedAt=1777574472339' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20193901.png?updatedAt=1777574472438' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/Screenshot%202026-04-30%20193835.png?updatedAt=1777574472382' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/Eve7.jpeg?updatedAt=1776271832251' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/Eve5.jpeg?updatedAt=1776271832164' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/Eve4.jpeg?updatedAt=1776271831767' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/Eve3.jpeg?updatedAt=1776271832260' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/Eve2.jpeg?updatedAt=1776271831562' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/WhatsApp%20Video%202026-05-05%20at%2011.29.33.mp4' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/WhatsApp%20Image%202026-05-05%20at%2011.26.34.jpeg' },
  { image: 'https://ik.imagekit.io/jai777/Dharmik/events/WhatsApp%20Image%202026-05-05%20at%2011.20.11.jpeg' }
];

const masonryItems = galleryItems.map((item, index) => ({
  id: index.toString(),
  img: item.image,
  url: item.image,
  height: [300, 450, 400, 350, 500, 300, 400, 350, 450, 550, 300, 400, 450, 350, 400, 300, 500, 450, 350, 400][index % 20],
  video: item.image.endsWith('.mp4')
}));

export function Gallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full bg-white pt-24 lg:pt-40 min-h-screen relative overflow-hidden flex flex-col">
      {/* Massive Background Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-5 select-none flex justify-center z-0">
        <h2 className="text-[18vw] lg:text-[20vw] font-heading font-black text-omnia-black whitespace-nowrap leading-none tracking-tighter">
          GALLERY
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-heading text-omnia-red uppercase tracking-[0.3em] mb-4"
        >
          Featured Work
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-omnia-black uppercase tracking-tighter leading-[1.1]"
        >
          Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-omnia-red to-red-500">Gallery</span>
        </motion.h3>
      </div>

      <div className="w-full flex-grow relative flex flex-col items-center">
        {/* Desktop View */}
        {!isMobile && (
          <div className="hidden md:block w-full h-[70vh] min-h-[500px] cursor-grab active:cursor-grabbing">
            <CircularGallery
              items={galleryItems}
              bend={3}
              textColor="#000000"
              borderRadius={0.05}
              scrollSpeed={2}
              scrollEase={0.05}
            />
          </div>
        )}

        {/* Mobile View */}
        <div className="block md:hidden w-full px-4 pb-8 relative">
          {isMobile && (
            <Masonry
              items={masonryItems}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover
              hoverScale={0.95}
              blurToFocus
              colorShiftOnHover={false}
            />
          )}
        </div>
      </div>
    </div>
  );
}
