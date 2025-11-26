import React from 'react';
import { TEAM } from '../constants';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] py-32">
      <div className="container mx-auto px-6 md:px-12">
         
         <div className="grid grid-cols-1 lg:grid-cols-2 mb-24 gap-12 items-end">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
           >
             <h2 className="text-[8vw] leading-[0.8] font-black uppercase tracking-tighter text-white">
               The Team <br />
               <span className="text-transparent stroke-text-white">& Talent</span>
             </h2>
             <div className="w-32 h-4 text-[#FFB800] mt-4">
                 <svg viewBox="0 0 100 10" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M0 5 Q 10 0, 20 5 T 40 5 T 60 5 T 80 5 T 100 5" />
                 </svg>
             </div>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3, duration: 0.8 }}
             className="pb-4"
           >
             <p className="text-neutral-400 text-xs font-bold uppercase tracking-wide max-w-md leading-relaxed">
               Epic's team is a powerhouse of creativity and expertise, united by a passion for innovation and push boundaries and deliver results.
             </p>
             <button className="mt-8 bg-[#FFB800] text-black px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
                 View Team
             </button>
           </motion.div>
         </div>

         <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-50px" }}
           variants={{
             visible: { transition: { staggerChildren: 0.15 } }
           }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
         >
           {TEAM.map((member, idx) => (
             <motion.div 
               key={member.id} 
               variants={{
                 hidden: { opacity: 0, y: 30 },
                 visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
               }}
               className="group cursor-pointer"
             >
               <div className="relative aspect-[3/4] overflow-hidden bg-neutral-800 mb-4 border border-white/10">
                  {/* Yellow Overlay */}
                  <div className="absolute inset-0 bg-[#FFB800] translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10 mix-blend-multiply"></div>
                  
                  <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 z-0 relative"
                  />
                  
                  <div className="absolute bottom-4 right-4 z-20 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <Linkedin size={16} />
                  </div>
               </div>
               
               <div className="flex justify-between items-start border-t border-white/20 pt-4 group-hover:border-[#FFB800] transition-colors">
                 <div>
                   <h3 className="text-lg font-black uppercase tracking-wide text-white">{member.name}</h3>
                   <div className="bg-neutral-900 inline-block px-2 py-1 mt-2 border border-white/10">
                      <p className="text-[10px] font-mono uppercase text-neutral-400">{member.role}</p>
                   </div>
                 </div>
               </div>
             </motion.div>
           ))}
         </motion.div>

      </div>
    </section>
  );
};

export default Team;