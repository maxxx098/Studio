import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, Target, RefreshCw, CheckCircle2, Circle } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS } from '../assets'; // Assuming ASSETS is an object that contains paths to images

const Services: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] ">
      <div className=" mx-auto px-6 md:px-12 relative z-10">
        {/* Centered Header */}
    
        {/* 3 CARDS GRID */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
             visible: { transition: { staggerChildren: 0.2 } }
          }}
       className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-20"
        >
           {/* CARD 1: DISCOVERY & ANALYSIS */}
           <motion.div 
             variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
             className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 flex flex-col h-full hover:border-[#FFC247]/30 transition-colors group"
           >
              {/* Visual Container */}
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 h-48 mb-8 relative overflow-hidden flex flex-col">
                  {/* Window Controls */}
                  <div className="h-8 border-b border-white/5 flex items-center px-3 gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                  {/* Dashboard Content */}
                  <div className="flex-1 p-4 flex gap-4">
                      {/* Left: Charts */}
                      <div className="flex-1 flex flex-col gap-3">
                          <div className="h-16 bg-[#222] rounded-lg p-2 flex items-end gap-1 justify-around">
                              <motion.div className="w-2 bg-[#FFC247]/20 rounded-t-sm" animate={{ height: ["40%", "70%", "40%"] }} transition={{ duration: 2, repeat: Infinity }}></motion.div>
                              <motion.div className="w-2 bg-[#FFC247]/40 rounded-t-sm" animate={{ height: ["60%", "30%", "60%"] }} transition={{ duration: 2.5, repeat: Infinity }}></motion.div>
                              <motion.div className="w-2 bg-[#FFC247] rounded-t-sm" animate={{ height: ["30%", "80%", "30%"] }} transition={{ duration: 3, repeat: Infinity }}></motion.div>
                              <div className="w-2 bg-[#FFC247]/10 rounded-t-sm h-full"></div>
                          </div>
                          <div className="flex-1 bg-[#222] rounded-lg p-2 flex flex-col gap-2">
                              <div className="w-full h-1.5 bg-white/10 rounded-full"></div>
                              <div className="w-2/3 h-1.5 bg-white/10 rounded-full"></div>
                              <div className="w-full h-1.5 bg-white/5 rounded-full mt-1"></div>
                          </div>
                      </div>
                      {/* Right: Target */}
                      <div className="flex-1 bg-[#222] rounded-lg flex items-center justify-center relative">
                          <Target size={48} className="text-[#333]" />
                          <Target size={48} className="text-[#FFC247] absolute opacity-50 blur-[20px]" />
                          <Target size={48} className="text-[#FFC247] absolute" />
                      </div>
                  </div>
              </div>

              <h3 className="text-2xl text-white font-bold mb-3">Discovery & Analysis</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                  We dive deep into your needs, exploring ideas and defining strategies for long-term success.
              </p>
           </motion.div>

           {/* CARD 2: DEVELOPMENT & TEST */}
           <motion.div 
             variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
             className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 flex flex-col h-full hover:border-[#FFC247]/30 transition-colors group"
           >
              {/* Visual Container */}
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 h-48 mb-8 relative overflow-hidden flex flex-col">
                  {/* Window Controls */}
                  <div className="h-8 border-b border-white/5 flex items-center px-3 gap-1.5 bg-[#151515]">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                  {/* Code Content */}
                  <div className="flex-1 p-4 font-mono text-[10px] text-neutral-400 leading-relaxed overflow-hidden">
                      <div className="flex gap-2 mb-1">
                          <span className="text-blue-400">class</span>
                          <span className="text-yellow-200">Sampling</span><span className="text-white">(layers.Layer):</span>
                      </div>
                      <div className="mb-2 pl-4 text-neutral-500 italic">
                          """Uses (mean, log_var) to sample z, the vector encoding a digit."""
                      </div>
                      <div className="flex gap-2 pl-4">
                          <span className="text-blue-400">def</span>
                          <span className="text-yellow-200">call</span><span className="text-white">(self, inputs):</span>
                      </div>
                       <div className="pl-8 text-neutral-300">
                          z_mean, z_log_var = inputs
                      </div>
                      <div className="pl-8 text-neutral-300 flex items-center gap-1">
                          batch = tf.shape(z_mean)[<span className="text-orange-400">0</span>]
                          <motion.span 
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="w-1.5 h-3 bg-[#FFC247] inline-block align-middle"
                          />
                      </div>
                  </div>
              </div>

              <h3 className="text-2xl text-white font-bold mb-3">Development & Test</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                  We craft tailored solutions for your goals and rigorously test them for top-notch reliability.
              </p>
           </motion.div>

           {/* CARD 3: LAUNCH & MAINTAIN */}
           <motion.div 
             variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
             className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 flex flex-col h-full hover:border-[#FFC247]/30 transition-colors group"
           >
              {/* Visual Container */}
              <div className="bg-[#1a1a1a] rounded-xl border border-white/5 h-48 mb-8 relative overflow-hidden flex flex-col">
                  {/* Window Controls */}
                  <div className="h-8 border-b border-white/5 flex items-center px-3 gap-1.5 bg-[#151515] justify-between">
                       <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                       </div>
                       <div className="text-[9px] text-neutral-500 font-mono">Status: Active</div>
                  </div>
                  {/* Status Content */}
                  <div className="flex-1 flex">
                      {/* Left: Menu */}
                      <div className="w-1/2 border-r border-white/5 p-3 flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-[10px] text-neutral-500">
                              <Circle size={8} /> Security
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-black bg-[#FFC247] px-2 py-1 rounded">
                              <CheckCircle2 size={10} /> Efficiency
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-neutral-500">
                              <Circle size={8} /> Speed
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-neutral-500">
                              <Circle size={8} /> Accuracy
                          </div>
                      </div>
                      {/* Right: Loader */}
                      <div className="w-1/2 flex flex-col items-center justify-center p-3">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                              <RefreshCw size={24} className="text-neutral-400" />
                          </motion.div>
                          <div className="w-full bg-neutral-800 h-1 rounded-full mt-4 overflow-hidden">
                              <motion.div 
                                className="h-full bg-[#FFC247]"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                              />
                          </div>
                          <span className="text-[9px] text-neutral-500 mt-2 font-mono">Updating...</span>
                      </div>
                  </div>
              </div>

              <h3 className="text-2xl text-white font-bold mb-3">Launch & Maintain</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                  We deploy your solution seamlessly and ensure its continued performance with ongoing care.
              </p>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
