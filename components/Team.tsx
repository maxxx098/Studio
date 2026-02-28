
import React from 'react';
import { TEAM } from '../constants';
import { LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS } from '../assets';

const Team: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] pt-32 pb-20 border-b border-white/10 overflow-hidden">
      <div className=" mx-auto px-6 md:px-12">
         
         {/* HEADER SECTION */}
         <div className="flex flex-col md:flex-row justify-between items-start mb-24 relative">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
           >
             <h2 className="text-[10vw] md:text-[8vw] leading-[0.8] uppercase tracking-swiss-tight text-white">
               The Team <br />
               & Talent
             </h2>
             <div className="w-64 h-6 text-[#ff4747] mt-4">
                 <svg viewBox="0 0 200 20" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10 T 120 10 T 140 10 T 160 10" />
                 </svg>
             </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="mt-12 md:mt-0 max-w-md text-right md:pl-12"
           >
             <p className="text-neutral-400 text-[10px] md:text-xs font-bold uppercase tracking-swiss-wide leading-relaxed">
               Epic's team is a powerhouse of creativity and expertise, united by a passion <span className="text-white">for innovation and push boundaries and deliver results.</span>
             </p>
             <button className="mt-6 bg-[#ff4747] text-black px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-swiss-wide hover:scale-105 transition-transform">
                 View Team
             </button>
           </motion.div>
         </div>

      

         {/* VOICE OF CE-YO SECTION */}
         <div className="mt-32 pt-24 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            
            {/* Left Text Content */}
            <div className="lg:col-span-7 space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-xl font-bold uppercase tracking-swiss-tight text-white mb-6">Our Path Forward</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl font-medium tracking-wide">
                        As a young team, we develop content that the unreachables want to see and build sustainable 
                        <span className="inline-block mx-1">💡</span> communities. Facts: 85% of social media ads are swiped away in the first 2.5 seconds. 
                        We are changing that and creating content that the unreachables are interested in. We ensure that these people enjoy seeing your advertising.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-xl font-bold uppercase tracking-swiss-tight text-white mb-6">Behind The Scenes</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl font-medium tracking-wide">
                        We are the world's first agency dedicated to targeting the elusive those who live social-first and instinctively swipe away ads that fail to capture their 
                        <span className="inline-block mx-1 text-green-500">#</span> attention. Our innovative approach is tailored to connect with this elusive audience through engaging, authentic content that resonates with their unique preferences and habits.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="pt-8"
                >
                   <span className="font-handwriting text-4xl text-white opacity-80" style={{ fontFamily: 'cursive' }}>Symon.</span>
                </motion.div>
            </div>

            {/* Right Image Content */}
            <div className="lg:col-span-5 relative">
                 <motion.div
                    initial={{ opacity: 0, rotate: 5, y: 50 }}
                    whileInView={{ opacity: 1, rotate: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                 >
                    {/* Title Overlay */}
                    <div className="absolute -top-16 right-0 text-right z-20">
                        <h2 className="text-6xl uppercase tracking-swiss-tight text-white">
                            Voice of <br /> Ce-Yo.
                        </h2>
                    </div>

                    {/* Image Card */}
                    <div className="bg-[#ff4747] p-2 rounded-xl rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl mt-12">
                        <div className="rounded-lg overflow-hidden relative">
                             <img src={ASSETS.HERO.MODEL_MAIN} alt="CEO" className="w-full h-auto object-cover aspect-[4/5] " />
                             
                             {/* Sticker */}
                             <div className="absolute top-4 right-4 w-12 h-12 bg-[#ff4747] rounded-full flex items-center justify-center border-2 border-white shadow-lg z-30">
                                 <span className="text-xl">😎</span>
                             </div>
                        </div>
                    </div>
                 </motion.div>
            </div>

         </div>

      </div>
    </section>
  );
};

export default Team;