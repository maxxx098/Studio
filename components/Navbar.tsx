import React, { useState } from 'react';
import { Search, Home, Layers, Settings, Users, PenTool, Mail, MoreHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Navbar: React.FC<NavbarProps> = ({ className = '', size = 'lg' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: Layers, label: 'Projects' },
    { icon: Settings, label: 'Services' },
    { icon: Users, label: 'Team' },
    { icon: PenTool, label: 'Process' },
    { icon: Mail, label: 'Contact' },
  ];
   const sizeClasses = {
    sm: { text: 'text-3xl', badge: 'text-[0.5rem] px-1 py-0.5 -bottom-1 -right-2', rounded: 'rounded-md', badgeRounded: 'rounded-sm' },
    md: { text: 'text-5xl', badge: 'text-[0.6rem] px-1.5 py-0.5 -bottom-1 -right-3', badgeRounded: 'rounded-md' },
    lg: { text: 'text-7xl md:text-8xl', badge: 'text-xs md:text-sm px-2 md:px-3 py-0.5 md:py-1 -bottom-2 -right-4 md:-bottom-4 md:-right-6', badgeRounded: 'rounded-lg' },
    xl: { text: 'text-[8rem] md:text-[10rem]', badge: 'text-lg px-4 py-1 -bottom-4 -right-10', badgeRounded: 'rounded-xl' },
  };

  const currentSize = sizeClasses[size];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 mix-blend-difference text-white">
      {/* Logo */}
   <div className={`relative inline-block select-none group uppercase items-start font-bold cursor-pointer group ${className}`}>

    {/* Main logo text */}
    <div className="flex items-start tracking-tight leading-none p-1  text-white transition-colors">
      <div className="flex items-baseline">
        <span className="text-3xl">Symvibe</span>
        <span className="text-3xl ml-1">Studio</span>
      </div>
      <span className="text-sm ml-0.5">®</span>
    </div>
  
  {/* Badge */}
    <div 
      className={`
        absolute 
        mt-3
        ${currentSize.badge}
        ${currentSize.badgeRounded}
        bg-red-500 
        text-white
        font-black 
        tracking-wider
        uppercase 
        font-inter
        -rotate-12 
        z-10
        transition-transform 
        duration-300 
        group-hover:-rotate-6 
        group-hover:scale-110
      `}
    >
      Since 2024
    </div>
   </div>
      {/* Right Actions */}
      <div className="flex items-center gap-6 md:gap-8">
        <Search className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
        
        <div className="relative">
            {/* Menu Trigger Button */}
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 bg-neutral-200 text-black rounded-lg flex items-center justify-center relative z-50 hover:bg-white transition-colors"
            >
                {isOpen ? <X size={24} /> : <MoreHorizontal size={24} strokeWidth={2.5} />}
            </motion.button>

            {/* Dropdown Menu Vertical Strip */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full right-0 mt-2 w-12 bg-neutral-200 text-black rounded-lg py-4 flex flex-col items-center gap-6 overflow-hidden shadow-2xl origin-top"
                    >
                        {menuItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + (i * 0.05) }}
                                className="text-neutral-500 hover:text-black hover:scale-125 transition-all cursor-pointer p-1"
                                title={item.label}
                            >
                                <item.icon size={20} strokeWidth={2} />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;