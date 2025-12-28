import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftLinks = [
    { path: '/', label: 'Home' },
    { path: '/mining', label: 'Mining' },
    { path: '/jewelry', label: 'Jewelry' },
  ];

  const rightLinks = [
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

const NavLink = ({ path, label }) => (
  <Link to={path} className="relative group overflow-hidden">
    <span className="text-sm uppercase tracking-[0.15em] font-medium text-white group-hover:text-[#D4AF37] transition-colors duration-300">
      {label}
    </span>
    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
  </Link>
);

  return (
    <>
      {/* WRAPPER: Fixed to top, z-index high. 
         Contains both TopBar and Nav so they stack correctly.
      */}
      <header className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-500 ${scrolled ? 'bg-[#050505]/95 shadow-2xl backdrop-blur-md' : 'bg-transparent'}`}>
        
        {/* Top Info Bar - Collapses on Scroll */}
        <motion.div 
          initial={{ height: 'auto', opacity: 1 }}
          animate={{ 
            height: scrolled ? 0 : 40, 
            opacity: scrolled ? 0 : 1 
          }}
          className="bg-[#0a0a0a] text-[#D4AF37] border-b border-[#D4AF37]/20 overflow-hidden"
        >
          <div className="max-w-[1440px] mx-auto px-6 h-full flex justify-between items-center text-[10px] md:text-xs uppercase tracking-wider">
            <span className="hidden md:block opacity-80">Masvingo • Harare • Worldwide Shipping</span>
            <div className="flex gap-6 ml-auto">
              <a href="tel:+263777684929" className="flex items-center gap-2 hover:text-white transition-colors">
                <FaPhoneAlt /> +263 77 768 4929
              </a>
              <a href="https://wa.me/263777684929" className="flex items-center gap-2 hover:text-white transition-colors">
                <FaWhatsapp size={14} /> WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        {/* Main Navigation */}
        <nav className={`w-full transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
          <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center relative">
            
            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsOpen(true)} className="lg:hidden text-[#D4AF37]">
              <HiMenuAlt4 size={28} />
            </button>

            {/* Desktop Left Links */}
            <div className="hidden lg:flex gap-10 w-1/3 justify-start">
              {leftLinks.map((link) => <NavLink key={link.path} {...link} />)}
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center group cursor-pointer">
              <Link to="/">
                  <div className="relative">
                      <img 
                        src={logo} 
                        alt="Stream Shed" 
                        className={`rounded-sm transition-all duration-500 ${scrolled ? 'h-10' : 'h-16'}`} 
                      />
                      <div className="absolute inset-0 bg-[#D4AF37] blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                  </div>
              </Link>
            </div>

            {/* Desktop Right Links */}
            <div className="hidden lg:flex gap-10 w-1/3 justify-end">
              {rightLinks.map((link) => <NavLink key={link.path} {...link} />)}
            </div>

            {/* Mobile Spacer */}
            <div className="lg:hidden w-[28px]"></div> 
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 bg-[#050505] z-[60] flex flex-col items-center justify-center border-l border-[#D4AF37]/20"
          >
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-8 right-8 text-[#D4AF37] hover:rotate-90 transition-transform duration-300"
            >
              <HiX size={40} />
            </button>
            
            <div className="flex flex-col gap-8 text-center">
              {[...leftLinks, ...rightLinks].map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="font-['Playfair_Display'] text-4xl text-white hover:text-[#D4AF37] transition-colors italic"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-10 flex gap-6 text-[#D4AF37]">
                <FaInstagram size={24} />
                <FaWhatsapp size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;