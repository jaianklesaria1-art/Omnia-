import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import CircularGallery from '../components/CircularGallery';
import Masonry from '../components/Masonry';

const galleryItems = [
  { image: 'https://ik.imagekit.io/yz2cyub4s/VideoCapture_20241224-223220.jpg?updatedAt=1782907338617' },
  { image: 'https://ik.imagekit.io/yz2cyub4s/WhatsApp%20Image%202026-07-01%20at%204.31.10%20PM.jpeg?updatedAt=1782903737186' },
  { image: 'https://ik.imagekit.io/yz2cyub4s/WhatsApp%20Image%202026-07-01%20at%204.31.11%20PM%20(1).jpeg?updatedAt=1782903737137' },
  { image: 'https://ik.imagekit.io/yz2cyub4s/WhatsApp%20Image%202026-07-01%20at%204.22.26%20PM.jpeg?updatedAt=1782903336229' },
  { image: 'https://ik.imagekit.io/yz2cyub4s/WhatsApp%20Image%202026-07-01%20at%204.22.26%20PM%20(1).jpeg?updatedAt=1782903336109' },
  { image: 'https://ik.imagekit.io/yz2cyub4s/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM%20(15).jpeg?updatedAt=1782902903803' },
  { image: 'https://ik.imagekit.io/yz2cyub4s/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM%20(16).jpeg?updatedAt=1782902903743' },
  { image: 'https://ik.imagekit.io/yz2cyub4s/DSC_9976.JPG?updatedAt=1782204686229' },
  { image: 'https://ik.imagekit.io/yz2cyub4s/TWF_2104%20(1).JPG?updatedAt=1782204581508' },
  { image: 'https://ik.imagekit.io/yz2cyub4s/TWF_1896%20(1).JPG?updatedAt=1782204578666' },
  { image: 'https://ik.imagekit.io/yz2cyub4s/TWF_2193.JPG?updatedAt=1782204578570' },
  { image: 'https://ik.imagekit.io/yz2cyub4s/IMG-20240729-WA0066.jpg?updatedAt=1782204339380' }
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
