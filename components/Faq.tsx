import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-10">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
           <motion.h2
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-5xl font-black uppercase tracking-tighter"
           >
             Frequently <br /> Asked Questions
           </motion.h2>
        </div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="lg:col-span-8"
        >
          {FAQ_ITEMS.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="border-b border-white/10"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-8 flex justify-between items-center text-left hover:text-[#FFB800] transition-colors"
              >
                <span className="text-lg md:text-xl font-bold uppercase tracking-wide pr-8">{item.question}</span>
                {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-neutral-400 text-lg leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;