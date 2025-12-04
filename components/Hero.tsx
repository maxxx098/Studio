import React, { useState, useEffect, useRef } from 'react';
import LightRays from './LightRays';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { PROJECTS } from '../constants';

const Hero: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Auto-cycle through project images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);
const scrollToWorks = () => {
    const worksSection = document.getElementById('works');
    if (worksSection) {
      const targetPosition = worksSection.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500; // 1.5 seconds for smooth scroll
      let start: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 
          ? 4 * t * t * t 
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };
  return (
    <div className="relative bg-[#0a0a0a] text-white w-full ">
      {/* SECTION 1: TYPOGRAPHY with LightRays as background */}
      <div className="relative px-4 pt-10 pb-32">
        {/* LightRays as absolute background */}
        <div
         className="absolute inset-0 pointer-events-none "
         style={{ width: '100%', height: '600px', overflow: 'hidden' }}
         >
          <LightRays
            raysOrigin="top-center"
            raysColor="#ff0000ff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
      {/* SECTION 1: TYPOGRAPHY (Sticky-ish feel) */}
      <div className="relative min-h-[90vh] ablute flex flex-col justify-center items-center px-4 pt-20 pb-32 z-10 ">
        <motion.div className="relative z-20 text-center flex flex-col items-center w-full">
          
          {/* Main Headline */}
           <h1 className="text-[14vw] leading-[1] uppercase -tracking-wide text-white flex flex-col items-center w-full relative">
            <motion.span 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="block relative"
            >
              Unlock
              {/* Floating Yellow Dot next to UNLOCK */}
              <motion.div 
                className="absolute -right-8 top-1/4 w-3 h-3 md:w-6 md:h-6 bg-[#FFB800] rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              />
            </motion.span>
            <motion.span 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block text-white"
            >
              Your Target
            </motion.span>
          </h1>
          
          {/* Subtitle */}
          <div className="mt-12 max-w-3xl text-center relative">
            <div className="w-4 h-4 bg-[#FFB800] rounded-full absolute -top-8 left-1/2 -translate-x-1/2 animate-pulse"></div>
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-300 leading-relaxed">
              Memorable & Captivating Digital <span className="mx-2">—</span> Experiences That Deliver, Partnering <br className="hidden md:block" />
              With <span className="text-white decoration-[#FFB800] underline decoration-2 underline-offset-4">Visionaries People</span> & Trailblazers To Innovate.
            </p>
          </div>

        </motion.div>

        {/* Bottom Left Location */}
        <div className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3 text-[24px] font-medium -tracking-wide uppercase text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path d="M 13 2.438 C 8.513 2.438 4.875 6.075 4.875 10.562 C 4.875 17.875 13 23.562 13 23.562 C 13 23.562 21.125 17.875 21.125 10.562 C 21.125 6.075 17.487 2.438 13 2.438 Z M 13 13.812 C 11.826 13.831 10.734 13.216 10.141 12.203 C 9.549 11.189 9.549 9.936 10.141 8.922 C 10.734 7.909 11.826 7.294 13 7.313 C 14.795 7.313 16.25 8.768 16.25 10.563 C 16.25 12.358 14.795 13.813 13 13.813 Z" fill="rgb(242,242,242)" opacity="0.2"></path><path d="M 13 6.5 C 10.757 6.5 8.938 8.319 8.938 10.562 C 8.938 12.805 10.757 14.624 13 14.624 C 15.243 14.624 17.062 12.805 17.062 10.562 C 17.062 8.319 15.243 6.5 13 6.5 Z M 13 13 C 11.654 13 10.563 11.909 10.563 10.563 C 10.563 9.217 11.654 8.126 13 8.126 C 14.346 8.126 15.437 9.217 15.437 10.563 C 15.437 11.909 14.346 13 13 13 Z M 13 1.625 C 8.066 1.63 4.067 5.629 4.062 10.563 C 4.062 13.752 5.535 17.132 8.328 20.338 C 9.582 21.787 10.995 23.091 12.538 24.228 C 12.818 24.424 13.191 24.424 13.471 24.228 C 15.011 23.091 16.42 21.786 17.672 20.338 C 20.459 17.131 21.938 13.751 21.938 10.562 C 21.932 5.629 17.933 1.631 13 1.626 Z M 13 22.546 C 11.321 21.226 5.687 16.377 5.687 10.562 C 5.687 6.523 8.961 3.25 13 3.25 C 17.038 3.25 20.312 6.523 20.312 10.562 C 20.312 16.375 14.679 21.226 13 22.547 Z" fill="rgb(242,242,242)"></path></svg>
          Based in MNL, Philippines
        </div>

        {/* Bottom Right Badge - Slideshow */}
        <button onClick={scrollToWorks} className="absolute bottom-8 right-6 md:right-12 z-30">
           <motion.div 
             whileHover={{ scale: 1.05 }}
             className="bg-[#FFB800] text-black rounded-xl flex items-center gap-2 pr-4 p-3 cursor-pointer"
           >
             <div className="text-[22px] font-semibold leading-none flex flex-col justify-center items-center uppercase tracking-tighter">
                <span className='tracking-wide'>Latest</span>
                <span className='tracking-wide'>Work</span>
             </div>
             <div className="w-16 h-10 bg-black relative overflow-hidden border border-black">
                {/* Slideshow Images */}
                {PROJECTS.map((project, index) => (
                  <img
                    key={project.id}
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-500"
                    style={{
                      opacity: currentProjectIndex === index ? 0.8 : 0,
                    }}
                  />
                ))}
             </div>
           </motion.div>
        </button>
      </div>

      {/* SECTION 2: IMAGE / "VIDEO" */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-[#C18E1B]">
            {/* The "Video" Image Composition */}
            <div className="w-full h-full relative flex items-end justify-center overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] opacity-10 mix-blend-overlay pointer-events-none"></div>
               
               <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
                alt="Model"
                className="h-[110%] object-cover object-top translate-y-[5%]"
               />
               
              
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;