import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../assets';

const About: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Strict Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8">
            
            {/* 1. Top Row Left: Label (Cols 1-3) */}
            <div className="md:col-span-3">
               <motion.span 
                 initial={{ opacity: 0, x: -20 }} // Initial state: slightly left and transparent
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="bg-white text-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-swiss-wide inline-block mb-4 md:mb-0"
               >
                 Your Goals, Our Mission
               </motion.span>
            </div>

            {/* 2. Top Row Right: Headline (Cols 4-12) */}
            <div className="md:col-span-9">
               <motion.h2 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="text-4xl md:text-6xl lg:text-7xl font-medium uppercase leading-[0.95] tracking-tight"
               >
                 We believe in the power of design to transform businesses. Our team of talented designers, strategists, and creative thinkers work.
               </motion.h2>
            </div>

            {/* Spacer Row to match the visual gap in reference image */}
            <div className="hidden md:block col-span-12 h-8"></div>

            {/* 3. Bottom Row Left: Image (Cols 1-3) */}
            <div className="md:col-span-3 flex items-end">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="rounded-lg overflow-hidden h-32 w-40 bg-neutral-800"
               >
                  <img 
                    src={ASSETS.TEAM[0]} 
                    alt="Team working" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                  />
               </motion.div>
            </div>

            {/* 4. Bottom Row Middle: Button (Cols 4-7) */}
            <div className="md:col-span-4 flex items-end">
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="bg-[#FFC247] text-black px-10 py-4 rounded-full flex items-center gap-2 text-xs font-bold uppercase tracking-swiss-wide hover:bg-white transition-colors"
               >
                  About Us <ArrowRight size={14} />
               </motion.button>
            </div>

            {/* 5. Bottom Row Right: Text (Cols 8-12) */}
            <div className="md:col-span-5 flex items-end">
               <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="text-neutral-400 text-xs font-bold uppercase leading-relaxed tracking-wide text-justify"
               >
                 Our branding design services are tailored to capture the essence of your business, creating a cohesive and memorable identity. Reflects your unique values and resonates with your target audience from competitors.
               </motion.p>
            </div>

        </div>

      </div>
    </section>
  );
};

export default About;
