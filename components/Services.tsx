import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Atom, Code, Send, ArrowRight, Star, Fan, Globe, Info, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSETS } from '@/assets';

const Services: React.FC = () => {
     const [activeService, setActiveService] = useState(SERVICES[0]); // make service component active
  return (
    <section className="bg-[#0a0a0a] pb-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Original Services List Below */}
        <div className="mt-48">
            <h2 className="text-[8vw] leading-[0.9] font-black uppercase tracking-tight text-white mb-12">
               Our <br /> Services 
               <span className="block w-32 h-4 text-[#FFB800]">
                  <svg viewBox="0 0 100 10" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M0 5 Q 10 0, 20 5 T 40 5 T 60 5 T 80 5 T 100 5" />
                  </svg>
               </span>
            </h2>
            
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
           {/* Image Preview - Sticky */}
           <div className="lg:col-span-5 hidden lg:block h-full min-h-[500px]">
             <div className="sticky top-32 w-full aspect-[4/5] bg-neutral-900 border border-white/10 p-2 ">
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FFB800]" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#FFB800]" />
                
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeService.id}
                    src={activeService.image}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                </AnimatePresence>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-black border border-[#FFB800] px-3 py-1">
                  <span className="text-[#FFB800] text-xs font-black uppercase tracking-widest">Epic Exclusive</span>
                </div>
             </div>
           </div>

           {/* List */}
           <div className="lg:col-span-7 flex flex-col justify-center">
             <div className="text-right mb-8 text-xs font-mono text-neutral-500 uppercase max-w-xs ml-auto">
               At Epic, we offer a wide range of creative services designed to elevate ensuring that every project we undertake is crafted precision and creativity.
             </div>

             {SERVICES.map((service) => (
               <div 
                 key={service.id}
                 onMouseEnter={() => setActiveService(service)}
                 className={`group border-t border-white/10 py-10 cursor-pointer transition-all duration-300 hover:pl-4 ${activeService.id === service.id ? 'border-[#FFB800]' : ''}`}
               >
                 <div className="flex items-start gap-6">
                   <div className="mt-1 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xs font-mono group-hover:bg-[#FFB800] group-hover:text-black group-hover:border-[#FFB800] transition-colors">
                     {service.id}
                   </div>
                   
                   <div className="flex-1">
                      <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-2 group-hover:text-[#FFB800] transition-colors">
                        {service.title}
                      </h3>
                      <div className={`grid grid-transition duration-300 ${activeService.id === service.id ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                          <div className="bg-neutral-900/50 p-6 border-l-2 border-[#FFB800]">
                            <p className="text-neutral-300 text-sm mb-4">{service.description}</p>
                            <div className="flex items-center justify-between">
                              <button className="bg-[#FFB800] text-black text-[10px] font-black uppercase px-4 py-2 tracking-widest hover:bg-white transition-colors">
                                CALL NOW
                              </button>
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={12} className="fill-[#FFB800] text-[#FFB800]" />
                                ))}
                                <span className="text-[10px] ml-2 text-neutral-500">1.45k+ PEOPLE RATED</span>
                              </div>
                            </div>
                            <ul className="mt-4 space-y-2 text-[10px] uppercase tracking-wider text-neutral-500 font-mono">
                              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#FFB800] rounded-full"/> Custom UI/UX Solutions</li>
                              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#FFB800] rounded-full"/> Prototyping & Testing</li>
                              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#FFB800] rounded-full"/> User-Centered Design</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                   </div>
                 </div>
               </div>
             ))}
             <div className="border-t border-white/10" />
           </div>
        </div>
        </div>

      </div>
    </section>
  );
};

export default Services;