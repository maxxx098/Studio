import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturedWork: React.FC = () => {
  const worksSectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="works" ref={worksSectionRef} className="bg-[#0a0a0a] py-28">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
             <h2 className="text-[8vw] leading-[0.8] font-black uppercase tracking-tight mb-4">
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
            >
              <Link 
                to={`/case-study/${project.slug}`}
                className="group cursor-pointer relative duration-300"
              >
                <div className="relative overflow-hidden aspect-[4/4] rounded-2xl">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                </div>
                
                <div className="py-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#FFB800] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center text-white group-hover:border-[#FFB800] group-hover:text-[#FFB800] group-hover:rotate-45 transition-all duration-300">
                      <ArrowUpRight size={16} strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {project.description || `Explore our ${project.category.toLowerCase()} work`}
                  </p>
                  
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedWork;