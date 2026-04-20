import { motion } from 'motion/react';
import CircularGallery from '../components/CircularGallery';

export function Gallery() {
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

      <div style={{ height: '70vh', minHeight: '500px', position: 'relative', width: '100%', cursor: 'grab' }} className="active:cursor-grabbing flex-grow">
        <CircularGallery
          items={[
            { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh9.jpeg?updatedAt=1776498402099&tr=w-800' },
            { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh8.jpeg?updatedAt=1776498402009&tr=w-800' },
            { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh7.jpeg?updatedAt=1776498402026&tr=w-800' },
            { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh6.jpeg?updatedAt=1776498402026&tr=w-800' },
            { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh5.jpeg?updatedAt=1776498402048&tr=w-800' },
            { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh4.jpeg?updatedAt=1776498402039&tr=w-800' },
            { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh3.jpeg?updatedAt=1776498402035&tr=w-800' },
            { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh2.jpeg?updatedAt=1776498401967&tr=w-800' },
            { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh11V.mp4?updatedAt=1776498406658' },
            { image: 'https://ik.imagekit.io/jai777/Dharmik/events/dh1.jpeg?updatedAt=1776498402003&tr=w-800' },
            { image: 'https://ik.imagekit.io/jai777/Dharmik/events/Eve7.jpeg?updatedAt=1776271832251&tr=w-800' },
            { image: 'https://ik.imagekit.io/jai777/Dharmik/events/Eve4.jpeg?updatedAt=1776271831767&tr=w-800' },
            { image: 'https://ik.imagekit.io/jai777/Dharmik/events/Eve3.jpeg?updatedAt=1776271832260&tr=w-800' },
            { image: 'https://ik.imagekit.io/jai777/Dharmik/events/DH10.jpeg?updatedAt=1776498403291&tr=w-800' }
          ]}
          bend={3}
          textColor="#000000"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>
    </div>
  );
}
