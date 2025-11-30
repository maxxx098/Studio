import React from 'react';
import { motion } from 'framer-motion'; // framer-motion for animations

const About: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] pt-32 pb-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12"> 
        
        {/* Header */}
        <div className="mb-24 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10vw] leading-[0.8] font-black uppercase tracking-tighter text-white relative z-10"
          >
            We Are Epic <br />
            Creative Studio<span className="text-[#FFB800]">.</span>
          </motion.h2>
          
          {/* Sticker Avatar */}
          <motion.div 
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
            whileHover={{ rotate: 15, scale: 1.2 }}
            className="absolute top-[40%] left-[65%] w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#FFB800] overflow-hidden z-20 bg-[#FFB800]"
          >
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=ffdfbf" alt="Avatar" className="w-full h-full object-cover" />
          </motion.div>

          {/* Squiggly Line */}
          <motion.div 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-64 h-8 mt-4 text-[#FFB800]"
          >
             <svg viewBox="0 0 200 20" fill="none" stroke="currentColor" strokeWidth="4" className="w-full h-full">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10 T 120 10 T 140 10 T 160 10 T 180 10" 
                />
             </svg>
          </motion.div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-white/10">
          <div className="md:col-span-6">
             {/* Left side empty or image */}
          </div>
          
          <div className="md:col-span-6 grid grid-cols-1 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xs font-black uppercase tracking-widest text-white mb-6">Who We Are</h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-medium max-w-md">
                At Epic, we are a dynamic team of creative visionaries and strategic thinkers dedicated to pushing boundaries <span className="inline-block align-middle mx-1 text-red-500">♥</span> and delivering exceptional results. We thrive on collaboration, affiliate, embracing challenges with enthusiasm and a commitment to crafting solutions that resonate.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xs font-black uppercase tracking-widest text-white mb-6">Behind The Brand</h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-medium max-w-md">
                Our journey began with a vision to transform how brands connect with their audiences, and we've grown into a team of forward-thinkers and industry disruptors. We blend passion <span className="inline-block align-middle mx-1 text-green-500">🌵</span> with expertise to craft remarkable digital experiences but exceed expectations.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Logo Strip */}
        <div className="mt-32 border-y border-white/10 py-12 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex justify-between items-center grayscale hover:grayscale-0 transition-all duration-500"
            >
                 <span className="text-2xl font-black tracking-tighter">LOGO IPSUM</span>
                 <span className="text-2xl font-black tracking-tighter">BRAND</span>
                 <span className="text-2xl font-black tracking-tighter">COMPANY</span>
                 <span className="text-2xl font-black tracking-tighter">STARTUP</span>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;