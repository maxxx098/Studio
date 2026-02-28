import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, Users, CheckCircle2, ExternalLink, Loader2 } from 'lucide-react';
import { getProjectBySlug, DETAILED_PROJECTS } from '../projectData';
import { DetailedProject } from '../types';

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<DetailedProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [nextProject, setNextProject] = useState<DetailedProject | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (!slug) return;
      
      setLoading(true);
      const data = await getProjectBySlug(slug);
      
      if (!data) {
        navigate('/');
        return;
      }
      
      setProject(data);
      
      // Find next project
      const currentIndex = DETAILED_PROJECTS.findIndex(p => p.slug === slug);
      const nextIndex = (currentIndex + 1) % DETAILED_PROJECTS.length;
      setNextProject(DETAILED_PROJECTS[nextIndex]);
      
      setLoading(false);
      window.scrollTo(0, 0);
    };

    fetchProject();
  }, [slug, navigate]);

  // Loading State with Blur
  if (loading) {
    return (
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-xl"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Loader2 className="w-16 h-16 text-[#FFB800] animate-spin mx-auto mb-6" />
              <motion.h2 
                className="text-2xl font-black uppercase tracking-wider text-white mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Loading Project
              </motion.h2>
              <motion.div 
                className="flex gap-1 justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                  className="w-2 h-2 bg-[#FFB800] rounded-full"
                />
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  className="w-2 h-2 bg-[#FFB800] rounded-full"
                />
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  className="w-2 h-2 bg-[#FFB800] rounded-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#0a0a0a]"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link 
            to="/"
            className="flex items-center gap-2 text-white hover:text-[#FFB800] transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-bold uppercase tracking-wider">Back to Home</span>
          </Link>
          <div className="text-[#FFB800] text-xs font-black uppercase tracking-widest">
            {project.category}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-20 mt-10"
      >

        
        <div className="relative  container mx-auto px-6 h-full flex items-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-black uppercase tracking-tighter text-white mb-6">
              {project.name}
            </h1>
            <p className="text-neutral-300 text-lg md:text-xl max-w-3xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Info */}
      <section className="bg-[#0a0a0a] py-16 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-[#FFB800] text-xs font-black uppercase tracking-widest mb-2">Client</div>
              <div className="text-white text-xl font-bold">{project.client}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-[#FFB800] text-xs font-black uppercase tracking-widest mb-2">Year</div>
              <div className="text-white text-xl font-bold">{project.year}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-[#FFB800] text-xs font-black uppercase tracking-widest mb-2">Duration</div>
              <div className="text-white text-xl font-bold flex items-center gap-2">
                <Clock size={20} />
                {project.duration}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-[#FFB800] text-xs font-black uppercase tracking-widest mb-2">Services</div>
              <div className="text-white text-xl font-bold flex items-center gap-2">
                <Users size={20} />
                {project.scope.length}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8">
                The Challenge
              </h2>
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-neutral-900 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8">
                Our Solution
              </h2>
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-12">
                {project.solution}
              </p>
              
              {/* Services */}
              <div className="flex flex-wrap gap-3">
                {project.scope.map((service, idx) => (
                  <motion.span 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-[#FFB800] text-black px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider"
                  >
                    {service}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-[#0a0a0a] py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1"
            >
              {project.gallery.map((image, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="relative "
                >
                  <img 
                    src={image} 
                    alt={`${project.name} - Image ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <section className="bg-neutral-900 py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-12">
                  The Results
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.results.map((result, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                      className="flex items-start gap-4 p-6 bg-[#0a0a0a] border border-white/10 rounded-lg hover:border-[#FFB800]/50 transition-colors"
                    >
                      <CheckCircle2 className="text-[#FFB800] mt-1 flex-shrink-0" size={24} />
                      <p className="text-white text-lg">{result}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Next Project */}
      {nextProject && (
        <section className="bg-[#0a0a0a] py-24 border-t border-white/10">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                Next Project
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                to={`/case-study/${nextProject.slug}`}
                className="group block relative overflow-hidden aspect-[21/9] max-w-5xl mx-auto border border-white/10 hover:border-[#FFB800]/50 transition-colors"
              >
                <img 
                  src={nextProject.imageUrl} 
                  alt={nextProject.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="text-[#FFB800] text-xs font-black uppercase tracking-widest mb-4">
                    {nextProject.category}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
                    {nextProject.name}
                  </h3>
                  <div className="flex items-center gap-2 text-white group-hover:text-[#FFB800] transition-colors">
                    <span className="text-sm uppercase tracking-wider">View Case Study</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </motion.div>
  );
};

export default CaseStudyDetail;