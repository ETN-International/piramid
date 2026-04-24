import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Objectives', href: '/#objectives' },
    { name: 'Partners', href: '/#partners' },
    { name: 'Results', href: '/#results' },
    { name: 'News', href: '/#news' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-5 group">
          <div className="relative flex items-center">
            {!logoError ? (
              <img 
                src={logo} 
                alt="PIRAMID Logo" 
                className="h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-14 h-14 bg-eu-blue rounded-full flex items-center justify-center text-white font-bold text-3xl transition-transform group-hover:scale-110">
                P
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span className={`font-black text-3xl md:text-4xl tracking-tighter leading-none transition-colors ${scrolled || !isHome ? 'text-eu-blue' : 'text-white'}`}>
              P.IR.A.M.iD
            </span>
            <span className={`text-xs font-black uppercase tracking-[0.3em] transition-colors ${scrolled || !isHome ? 'text-slate-400' : 'text-white/60'}`}>
              Erasmus+ Project
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-black uppercase tracking-widest transition-all hover:text-piramid-orange hover:translate-y-[-2px] ${scrolled || !isHome ? 'text-slate-600' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-2 cursor-pointer group bg-slate-100/10 px-5 py-2.5 rounded-full border border-white/10 hover:bg-piramid-orange/20 transition-all">
            <Globe className={`w-4 h-4 ${scrolled || !isHome ? 'text-eu-blue' : 'text-white'}`} />
            <span className={`text-xs font-black ${scrolled || !isHome ? 'text-slate-900' : 'text-white'}`}>EN</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`p-3 rounded-2xl transition-colors ${scrolled || !isHome ? 'bg-slate-100 text-eu-blue' : 'bg-white/10 text-white'}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-white md:w-80 md:left-auto"
          >
            <div className="p-8 h-full flex flex-col">
              <div className="flex justify-between items-center mb-16">
                <span className="font-black text-2xl text-eu-blue">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full"><X size={24} /></button>
              </div>
              <div className="space-y-8 flex-grow">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-3xl font-black text-slate-900 hover:text-eu-blue transition-colors uppercase tracking-tighter"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-3 text-slate-500">
                  <Globe className="w-5 h-5" />
                  <span className="font-bold">English</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
