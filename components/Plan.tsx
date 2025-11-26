import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowUpRight, HelpCircle, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS } from '../assets';

const Plan: React.FC = () => {
  
  const FEATURES_LEFT = [
    { text: "WEB-MEET CLIENT PROJECT", included: true },
    { text: "LIMITED ACCESS", included: true },
    { text: "16 HOURS OF TUTORIAL CONTENT", included: true },
    { text: "COMMUNITY SUPPORT", included: false },
    { text: "ACCESS TO 24/7 SUPPORT SERVER", included: false },
    { text: "ACCESS TO LATEST ASSETS LIBRARY", included: false },
  ];

  const FEATURES_RIGHT = [
    { text: "REAL-MEET CLIENT PROJECT", included: true },
    { text: "LIFETIME ACCESS", included: true },
    { text: "32 HOURS OF TUTORIAL CONTENT", included: true },
    { text: "COMMUNITY SUPPORT", included: true },
    { text: "ACCESS TO 24/7 SUPPORT SERVER", included: true },
    { text: "ACCESS TO LATEST ASSETS LIBRARY", included: true },
  ];

  return (
    <div className="text-white pt-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Main CTA */}
      <div className="mb-32 flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[6vw] leading-[0.9] uppercase tracking-swiss-tight text-center mb-12 relative z-10"
            >
               Big or Small? <br />
               We Have A Plan.
               {/* Sticker */}
               <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-20">
                 <motion.div 
                   initial={{ scale: 0, rotate: -12 }}
                   whileInView={{ scale: 1, rotate: 0 }}
                   viewport={{ once: true }}
                   transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                   className="w-16 h-16 bg-[#FFC247] rounded-full border-2 border-dashed border-black flex items-center justify-center text-3xl shadow-lg"
                 >
                    😍
                 </motion.div>
               </div>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-8">
               
               {/* LEFT CARD (YELLOW) */}
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="rounded-3xl overflow-hidden flex flex-col border border-white/10"
               >
                  {/* Card Header */}
                  <div className="bg-black text-white p-4 flex justify-between items-center border-b border-white/10">
                      <span className="font-bold uppercase tracking-swiss-wide text-sm relative">
                        Premium Plan
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#FFC247]"></span>
                      </span>
                      <HelpCircle size={18} className="text-neutral-400" />
                  </div>
                  
                  {/* Card Body (Yellow) */}
                  <div className="bg-[#FFC247] p-8 text-black">
                      <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-2">
                        $3500<span className="text-lg font-bold tracking-normal align-middle">/MONTH</span>
                      </h3>
                      
                      <div className="flex gap-6 text-[10px] font-bold uppercase tracking-wide mb-6 opacity-80">
                          <span className="flex items-center gap-1">🕒 10 Days Delivery</span>
                          <span className="flex items-center gap-1">🔁 8 Revisions</span>
                      </div>

                      <div className="w-full border-t border-black/10 my-6"></div>

                      <p className="text-xs font-bold leading-relaxed mb-8 opacity-90 max-w-xs">
                          Platinum 10 Pages Ecommerce, Booking, 🌈 SEO Optimized, Custom Design, 4 Breakpoints, Responsive Website.
                      </p>

                      <div className="flex flex-col xl:flex-row gap-4 items-start xl:items-center justify-between">
                          <button className="bg-black text-white px-8 py-3 rounded-md text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                              Subscribe Now
                          </button>
                          <div className="flex flex-col">
                              <div className="flex text-black text-xs gap-1">
                                  {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                              </div>
                              <span className="text-[10px] font-bold uppercase opacity-70">1,450+ People Rated</span>
                          </div>
                      </div>
                  </div>

                  {/* Card Footer (Features) */}
                  <div className="bg-[#111] p-8 text-neutral-400 text-xs font-bold uppercase tracking-wide space-y-4 flex-grow border-t border-white/5">
                      {FEATURES_LEFT.map((feat, i) => (
                          <div key={i} className={`flex items-center gap-3 ${feat.included ? 'text-white' : 'text-neutral-600'}`}>
                              {feat.included ? (
                                  <CheckCircle2 size={14} className="text-[#FFC247]" />
                              ) : (
                                  <XCircle size={14} className="text-red-900" />
                              )}
                              <span>{feat.text}</span>
                          </div>
                      ))}
                  </div>
               </motion.div>
               
               {/* RIGHT CARD (WHITE) */}
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="rounded-3xl overflow-hidden flex flex-col border border-white/10"
               >
                  {/* Card Header */}
                  <div className="bg-black text-white p-4 flex justify-between items-center border-b border-white/10">
                      <span className="font-bold uppercase tracking-swiss-wide text-sm">
                        Premium Plus Plan
                      </span>
                      <HelpCircle size={18} className="text-neutral-400" />
                  </div>
                  
                  {/* Card Body (White) */}
                  <div className="bg-[#E5E5E5] p-8 text-black">
                      <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-2">
                        $25000<span className="text-lg font-bold tracking-normal align-middle">/YEAR</span>
                      </h3>
                      
                      <div className="flex gap-6 text-[10px] font-bold uppercase tracking-wide mb-6 opacity-80">
                          <span className="flex items-center gap-1">🕒 07 Days Delivery</span>
                          <span className="flex items-center gap-1">🔁 Unlimited Revision</span>
                      </div>

                      <div className="w-full border-t border-black/10 my-6"></div>

                      <p className="text-xs font-bold leading-relaxed mb-8 opacity-90 max-w-xs">
                          Platinum+ 20 Pages Ecommerce, Booking, 🚀 Unique CRM, Custom Design, 4 Breakpoints, Marketing & More.
                      </p>

                      <div className="flex flex-col xl:flex-row gap-4 items-start xl:items-center justify-between">
                          <button className="bg-black text-white px-8 py-3 rounded-md text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                              Subscribe Now
                          </button>
                          <div className="flex flex-col">
                              <div className="flex text-black text-xs gap-1">
                                  {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                              </div>
                              <span className="text-[10px] font-bold uppercase opacity-70">1,750+ Subscribers</span>
                          </div>
                      </div>
                  </div>

                  {/* Card Footer (Features) */}
                  <div className="bg-[#111] p-8 text-neutral-400 text-xs font-bold uppercase tracking-wide space-y-4 flex-grow border-t border-white/5">
                      {FEATURES_RIGHT.map((feat, i) => (
                          <div key={i} className={`flex items-center gap-3 ${feat.included ? 'text-white' : 'text-neutral-600'}`}>
                              {feat.included ? (
                                  <CheckCircle2 size={14} className="text-white" />
                              ) : (
                                  <XCircle size={14} className="text-red-900" />
                              )}
                              <span>{feat.text}</span>
                          </div>
                      ))}
                  </div>
               </motion.div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;