import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ButtonColorful } from './ButtonColorful';
import BorderGlow from './BorderGlow';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-16 lg:py-32 bg-white relative overflow-hidden">
      {/* Massive Background Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-5 select-none flex justify-center z-0">
        <h2 className="text-[18vw] lg:text-[20vw] font-heading font-black text-omnia-black whitespace-nowrap leading-none tracking-tighter">
          CONTACT
        </h2>
      </div>

      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-omnia-red via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-heading text-omnia-red uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
            <h3 className="text-3xl md:text-6xl lg:text-7xl font-heading font-black text-omnia-black leading-[1.1] mb-8 md:mb-12 uppercase tracking-tighter">
              Let's Start<br />Creating<br />Together.
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-gray-500 font-sans text-sm uppercase tracking-widest mb-2">Email Us</h4>
                <a href="mailto:workwithomnia@gmail.com" className="text-xl md:text-2xl font-heading font-bold text-omnia-black hover:text-omnia-red transition-colors break-all">
                  workwithomnia@gmail.com
                </a>
              </div>
              
              <div>
                <h4 className="text-gray-500 font-sans text-sm uppercase tracking-widest mb-2">Call Us</h4>
                <a href="tel:+918108951419" className="text-xl md:text-2xl font-heading font-bold text-omnia-black hover:text-omnia-red transition-colors block">
                  Contact - +91 81089 51419
                </a>
              </div>

              <div>
                <h4 className="text-gray-500 font-sans text-sm uppercase tracking-widest mb-2">Follow Us</h4>
                <a href="https://www.instagram.com/omniaevents_marketing?utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-heading font-bold text-omnia-black hover:text-omnia-red transition-colors block">
                  @omniaevents_marketing
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full"
          >
            <BorderGlow
              edgeSensitivity={30}
              glowColor="0 100 45"
              backgroundColor="#f9fafb"
              borderRadius={0}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={['#E30613', '#ff4d4d', '#ff8080']}
              className="h-full"
            >
              <div className="p-6 md:p-12 h-full">
                <form className="space-y-6" action="https://formspree.io/f/xyklkjnr" method="POST">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-sans text-gray-600 uppercase tracking-wider">First Name</label>
                      <input type="text" name="firstName" required className="w-full bg-transparent border-b border-black/20 pb-2 text-omnia-black focus:outline-none focus:border-omnia-red transition-colors font-sans" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-sans text-gray-600 uppercase tracking-wider">Last Name</label>
                      <input type="text" name="lastName" required className="w-full bg-transparent border-b border-black/20 pb-2 text-omnia-black focus:outline-none focus:border-omnia-red transition-colors font-sans" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-sans text-gray-600 uppercase tracking-wider">Email Address</label>
                    <input type="email" name="email" required className="w-full bg-transparent border-b border-black/20 pb-2 text-omnia-black focus:outline-none focus:border-omnia-red transition-colors font-sans" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-sans text-gray-600 uppercase tracking-wider">Company</label>
                    <input type="text" name="company" className="w-full bg-transparent border-b border-black/20 pb-2 text-omnia-black focus:outline-none focus:border-omnia-red transition-colors font-sans" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-sans text-gray-600 uppercase tracking-wider">Message</label>
                    <textarea rows={4} name="message" required className="w-full bg-transparent border-b border-black/20 pb-2 text-omnia-black focus:outline-none focus:border-omnia-red transition-colors font-sans resize-none" />
                  </div>

                  <div className="mt-8">
                    <ButtonColorful 
                      type="submit"
                      label="Book a Call Today"
                      className="w-full"
                    />
                  </div>
                </form>
              </div>
            </BorderGlow>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
