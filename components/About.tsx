import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '../assets';
import { CheckCircle2 } from 'lucide-react';
import { ReactTyped } from 'react-typed';

const About: React.FC = () => {
  return (
    <section className="relative py-32 z-10 overflow-hidden">
          {/* 1. HEADER SECTION */}
            <div className="relative flex flex-col items-center">
             <div className='text-center'> 
              <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="text-center mb-5 relative z-20"
             >
                <div className="inline-flex items-center gap-2 bg-[#1a1a1a] px-3 py-1 rounded-full border border-white/10 mb-4">
                    <div className="w-4 h-4 bg-[#FFC247] rounded-full flex items-center justify-center text-[10px] text-black"><CheckCircle2 size={10} /></div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400">ABOUT US</span>
                </div>
             </motion.div>
              <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.1 }}
               className="text-[6vw] max-w-7xl md:text-[5vw] leading-[1] uppercase tracking-swiss-tight mb-8 font-medium"
             >
              <ReactTyped
                strings={[
                  'We are Epic Creative Studio, a cutting-edge design agency specializing in crafting immersive digital experiences that captivate and inspire.',
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop={false}
              />
             </motion.h1></div>
             
             {/* Middle CTA Button again if needed, or just spacer */}
             <div className="">
                <button className="bg-[#FFC247] text-black px-8 py-3 rounded-md text-xs font-bold uppercase tracking-swiss-wide hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,194,71,0.3)]">
                    Book an Appointment
                </button>
             </div>
          </div>
    </section>
  );
};

export default About;