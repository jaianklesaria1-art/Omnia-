import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const whyUsReasons = [
  {
    title: "Expertise and Experience",
    description: "With years of experience in the industry, we have a deep understanding of the marketing landscape in India and Dubai. Our team of experts has successfully executed a wide range of marketing campaigns across various industries, making us well-equipped to meet your unique needs."
  },
  {
    title: "Creative Excellence",
    description: "Creativity is at the heart of everything we do. We pride ourselves on our ability to come up with innovative and eye-catching marketing solutions that set your brand apart from the competition. Our creative team is passionate about turning your vision into reality."
  },
  {
    title: "Comprehensive Services",
    description: "OMNIA offers a wide range of services under one roof. From mall activations to digital screens, from social media management to website development, we have the expertise to handle all aspects of your marketing strategy seamlessly."
  },
  {
    title: "Quality Assurance",
    description: "We are committed to delivering top-notch quality in every project we undertake. Whether it's the materials we use for printing or the designs we create, we maintain the highest standards to ensure that your brand is represented in the best possible way."
  },
  {
    title: "Strategic Approach",
    description: "We don't believe in one-size-fits-all solutions. Our team takes a strategic approach to every project, conducting thorough market research and understanding your target audience to tailor our services to your specific goals and objectives."
  }
];

const teamMembers = [
  { name: "Dharmik Modi", role: "Founder", image: "https://ik.imagekit.io/jai777/Dharmik/events/dharmik.jpeg" }
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="w-full bg-white pt-24 lg:pt-40 relative overflow-hidden">
      {/* Massive Background Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-5 select-none flex justify-center z-0">
        <h2 className="text-[18vw] lg:text-[20vw] font-heading font-black text-omnia-black whitespace-nowrap leading-none tracking-tighter">
          ABOUT US
        </h2>
      </div>

      {/* Page Hero */}
      <section className="relative px-6 md:px-12 max-w-7xl mx-auto pb-16 lg:pb-32 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-omnia-black uppercase tracking-tighter leading-[1.1]"
        >
          Redefining<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-omnia-red to-red-500">Brand Experiences.</span>
        </motion.h1>
      </section>

      {/* What We Do */}
      <section className="bg-gray-200 py-16 lg:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-omnia-black mb-8"
          >
            What We Do ?
          </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-gray-600 font-sans text-base md:text-lg"
            >
            <p>
              At OMNIA Creative Agency, we are your one-stop solution for all your marketing needs. With years of expertise and a dedicated team of professionals, we have established ourselves as India's leading marketing agency and have now expanded our services to Dubai, bringing our innovative and creative marketing solutions to the heart of the Middle East.
            </p>
            <p>
              At OMNIA Creative Agency, we pride ourselves on our creativity, professionalism, and commitment to delivering results. Whether you're looking to boost your brand's visibility, engage your audience, or create a memorable event, we have the expertise and passion to make it happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-white py-16 lg:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-omnia-black text-center mb-16"
          >
            Why Us ?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow"
              >
                <h3 className="text-xl font-heading font-bold text-omnia-black mb-4">{reason.title}</h3>
                <p className="text-gray-500 font-sans text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Crew */}
      <section className="bg-white py-16 lg:py-32 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-heading font-bold text-omnia-black mb-4"
            >
              The OMNIA Crew
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 font-sans text-sm uppercase tracking-widest"
            >
              People Behind OMNIA Creative Agency
            </motion.p>
          </div>

          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden aspect-[4/5] bg-gray-100 w-full max-w-sm"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-omnia-black/90 via-omnia-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-heading font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-gray-300 font-sans text-xs uppercase tracking-wider">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
