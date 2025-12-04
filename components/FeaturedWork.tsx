import { useRef } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturedWork: React.FC = () => {
  const worksSectionRef = useRef<HTMLDivElement>(null);
  return (
    <section id="works" ref={worksSectionRef} className="bg-[#0a0a0a] py-32">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
             <h2 className="text-[8vw] leading-[0.8] font-black uppercase tracking-tighter mb-4">
               Featured Work
             </h2>
             <div className="w-48 h-4 text-[#FFB800] mb-8">
                <svg viewBox="0 0 100 10" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M0 5 Q 10 0, 20 5 T 40 5 T 60 5 T 80 5 T 100 5" />
                </svg>
             </div>
             <p className="text-neutral-400 text-xs md:text-sm uppercase tracking-wide font-bold max-w-xl leading-relaxed">
               Our work <span className="text-white decoration-white underline underline-offset-4">reflects our — dedication</span> to delivering results that <span className="bg-white text-black px-1">not only meet but effective</span> results cross <span className="text-[#FFB800]">various industries.</span>
             </p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 md:mt-0 bg-[#FFB800] text-black px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300"
          >
            View Projects
          </motion.button>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.id} 
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="group cursor-pointer relative"
            >
              <div className="relative overflow-hidden aspect-[4/3] border border-white/10 bg-neutral-900">
                <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FFB800]">{project.category}</span>
                </div>
                
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover "
                />
                                
                  <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent">
                    <h3 
                        className="text-3xl font-black uppercase tracking-tighter text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0" 
                        title={project.title}
                    >
                        {project.title}
                    </h3>
                    <div className="w-10 h-10 bg-[#FFB800] rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                        <ArrowUpRight size={20} />
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

export default FeaturedWork;