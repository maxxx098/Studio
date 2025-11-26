import React, { useState } from 'react';
import { Search, Home, Layers, Settings, Users, PenTool, Mail, MoreHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: Layers, label: 'Projects' },
    { icon: Settings, label: 'Services' },
    { icon: Users, label: 'Team' },
    { icon: PenTool, label: 'Process' },
    { icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 mix-blend-difference text-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
         <div className="text-xl uppercase tracking-swiss-tight leading-none border-2 border-white p-1 font-bold cursor-pointer hover:bg-white hover:text-black transition-colors">
           Symvibe <span className='text-yellow-500'>Studio</span> ®
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