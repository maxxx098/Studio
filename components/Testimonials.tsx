import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion'; // 

const Testimonials: React.FC = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-15 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Recognition</h2>
             <div className="mt-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black">
               <Quote size={24} />
             </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="lg:col-span-8 grid gap-8"
          >
            {TESTIMONIALS.map((t) => (
              <motion.div 
                key={t.id} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="border-b border-white/10 pb-12 last:border-0 hover:bg-white/5 p-6 transition-colors duration-300"
              >
                <p className="text-2xl md:text-3xl font-bold uppercase leading-tight mb-8">"{t.quote}"</p>
                <div className="flex justify-between items-end">
                   <div>
                     <h4 className="font-bold text-yellow-400 uppercase tracking-widest text-sm">{t.author}</h4>
                     <p className="text-neutral-500 text-xs uppercase mt-1">{t.role}, {t.company}</p>
                   </div>
                   <div className="text-right text-xs text-neutral-600 font-mono uppercase">Red Dot Award ↗</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;