import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowUpRight, HelpCircle, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS } from '../assets';

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-black border rounded-3xl pt-24 relative overflow-hidden border-t border-white/10 m-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Huge Footer Text */}
          <div className=''>
           <div className="pt-15 pb-12">
           <div className="flex justify-between items-end mb-8">
              <div className="bg-neutral-800 px-3 py-1 text-[10px] uppercase tracking-widest rounded-sm">Get A Remix Link</div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">Contact Us <ArrowUpRight size={12} /></div>
           </div>
           <motion.h1 
             initial={{ y: "100%" }}
             whileInView={{ y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
             className="text-[18vw] leading-[0.75] font-black uppercase tracking-tighter text-[#FFB800] mix-blend-difference select-none"
           >
              Get In Touch<span className="text-white">.</span>
           </motion.h1>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#FFB800] text-black py-12 px-6 -mx-6 md:-mx-12 mt-12">
           <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                 <p className="text-[10px] font-mono font-bold uppercase max-w-xs leading-relaxed opacity-80">
                    Facts One and Inner Display are used under the terms of free license for commercial use. Copyright © though strictly.
                 </p>
                 <div className="flex gap-4 mt-8">
                    {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                       <div key={i} className="w-8 h-8 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-[#FFB800] transition-colors cursor-pointer">
                          <Icon size={14} />
                       </div>
                    ))}
                 </div>
              </div>
              
              <div>
                 <h4 className="font-black uppercase text-xs tracking-widest mb-4">Address</h4>
                 <p className="font-bold text-xs uppercase">H.Q. P.O. LX 93 Los Angeles, CA 784</p>
              </div>
              
              <div>
                 <h4 className="font-black uppercase text-xs tracking-widest mb-4">Contact</h4>
                 <p className="font-bold text-xs uppercase mb-1">(830) 966-6111</p>
                 <p className="font-bold text-xs uppercase">info@epicstudio.com</p>
              </div>
           </div>
           
           <div className="flex justify-between items-center mt-12 pt-8 border-t border-black/10 text-[10px] font-black uppercase tracking-widest">
              <p>© Mandro Designs 2024</p>
              <button className="hover:underline">Go Back To Top</button>
           </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;