import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Omnia has done a great job with our brochures and marketing creatives. Their designs are thoughtful, visually strong, and aligned with our brand. The team is professional and easy to work with.",
    by: "Mihir Patel",
    title: "Multispace Developers",
    imgSrc: "https://ik.imagekit.io/yz2cyub4s/CLIENTS/mihir-j-patel-768x512-1.jpg?updatedAt=1782902600227"
  },
  {
    tempId: 3,
    testimonial: "Omnia does a great job executing live nights at R City Mall, along with smooth artist management.",
    by: "Aditya Shinde",
    title: "Marketing Manager, RCity Mall",
    imgSrc: "https://api.dicebear.com/7.x/notionists/svg?seed=Aditya&backgroundColor=f3f4f6"
  },
  {
    tempId: 2,
    testimonial: "Omnia is super quick with their turnaround and still manages to deliver great quality every time.",
    by: "Shrial Shetty",
    title: "Marketing Executive, Mayfair Housing",
    imgSrc: "https://api.dicebear.com/7.x/notionists/svg?seed=Shrial&backgroundColor=f3f4f6"
  },
  {
    tempId: 1,
    testimonial: "Omnia has been a dependable partner for our events, delivering seamless execution every time. Their team handles last-minute and urgent requirements with ease and professionalism.",
    by: "Abhipraya Kaviratna",
    title: "AVP Marketing, Mayfair Housing",
    imgSrc: "https://api.dicebear.com/7.x/notionists/svg?seed=Abhipraya&backgroundColor=f3f4f6"
  },
  {
    tempId: 4,
    testimonial: "Love how Omnia turns our store launches and Burger Raves into high-energy experiences with super Innovative and Experiential Marketing & Events.",
    by: "Aman Maheshwari",
    title: "Sr. Brand Marketing Executive, Good Flippin burger",
    imgSrc: "https://ik.imagekit.io/yz2cyub4s/CLIENTS/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM%20(13).jpeg?updatedAt=1782906300169"
  },
  {
    tempId: 5,
    testimonial: "A reliable team that ensures smooth execution, great service, and proactive client coordination.",
    by: "Eunice Evans",
    title: "Associate Director, GOOD FLIPPIN BURGER",
    imgSrc: "https://ik.imagekit.io/yz2cyub4s/CLIENTS/WhatsApp%20Image%202026-07-01%20at%204.16.41%20PM%20(14).jpeg?updatedAt=1782906300175"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer transition-all duration-500 ease-in-out",
        isCenter ? "z-10" : "z-0"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        filter: isCenter 
          ? "drop-shadow(0px 10px 25px rgba(0,0,0,0.15))" 
          : "drop-shadow(0px 4px 10px rgba(0,0,0,0.05))"
      }}
    >
      <div 
        className={cn(
          "w-full h-full border-2 p-5 sm:p-6 flex flex-col transition-colors duration-500 ease-in-out relative",
          isCenter 
            ? "bg-omnia-red text-omnia-black border-omnia-red" 
            : "bg-[#ffffff] text-white border-black/20 hover:border-omnia-red/50"
        )}
        style={{
          clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        }}
      >
        <span
          className={cn(
            "absolute block origin-top-right rotate-45",
            isCenter ? "bg-[#ffffff]/20" : "bg-[#ffffff]"
          )}
          style={{
            right: -2,
            top: 48,
            width: SQRT_5000,
            height: 2
          }}
        />
        <img
          src={testimonial.imgSrc}
          alt={`${testimonial.by.split(',')[0]}`}
          className="mb-4 shrink-0 h-14 w-14 rounded-full bg-[#ffffff] object-cover object-top border-2 border-white relative z-10"
          style={{
            boxShadow: isCenter ? "3px 3px 0px rgba(0,0,0,0.2)" : "3px 3px 0px #F3F4F6"
          }}
        />
        <div className="flex-1 overflow-y-auto mb-4 pr-1">
          <h3 className={cn(
            "text-xs sm:text-sm md:text-base font-medium leading-snug relative z-10",
            isCenter ? "text-omnia-black" : "text-omnia-black"
          )}>
            "{testimonial.testimonial}"
          </h3>
        </div>
        <div className={cn(
          "shrink-0 z-10 pb-2",
        )}>
          <p className={cn(
            "text-sm font-bold uppercase",
            isCenter ? "text-omnia-black" : "text-omnia-black"
          )}>
            {testimonial.by}
          </p>
          <p className={cn(
            "text-xs md:text-sm mt-1",
            isCenter ? "text-omnia-black/80" : "text-omnia-black"
          )}>
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection: React.FC = () => {
  const [cardSize, setCardSize] = useState(380);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 380 : 310);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="bg-[#ffffff] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 lg:pt-16 pb-8 z-10 relative">
        <div className="text-center mb-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-black text-omnia-black uppercase tracking-tight mb-4"
          >
            Client <span className="text-omnia-red font-bold">Love</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-omnia-black font-sans text-sm md:text-base uppercase tracking-widest max-w-2xl mx-auto"
          >
            What our partners say about working with us
          </motion.p>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{ height: 600 }}
      >
        {testimonialsList.map((testimonial, index) => {
          const position = testimonialsList.length % 2
            ? index - (testimonialsList.length - 1) / 2
            : index - testimonialsList.length / 2;
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4 z-20">
          <button
            onClick={() => handleMove(-1)}
            className={cn(
              "flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center text-xl sm:text-2xl transition-colors rounded-full",
              "bg-[#ffffff] border-2 border-black/20 text-omnia-black hover:bg-omnia-red hover:text-white hover:border-omnia-red",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-sm"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => handleMove(1)}
            className={cn(
              "flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center text-xl sm:text-2xl transition-colors rounded-full",
              "bg-[#ffffff] border-2 border-black/20 text-omnia-black hover:bg-omnia-red hover:text-white hover:border-omnia-red",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-sm"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};
