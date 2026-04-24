import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { languages } from '../i18n';

const LanguageSelector = ({ variant = 'light' }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find((l) => l.code === i18n.resolvedLanguage) || languages[0];

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const handleChange = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  const triggerClasses =
    variant === 'dark'
      ? 'bg-white/10 border-white/10 text-white hover:bg-white/20'
      : 'bg-slate-100 border-slate-200 text-slate-900 hover:bg-slate-200';

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-black uppercase tracking-widest transition-all ${triggerClasses}`}
      >
        <Globe className="w-4 h-4" />
        <span>{current.code.toUpperCase()}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-3 min-w-[200px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50"
          >
            {languages.map((lang) => {
              const active = lang.code === current.code;
              return (
                <li key={lang.code} role="option" aria-selected={active}>
                  <button
                    type="button"
                    onClick={() => handleChange(lang.code)}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-3 text-left text-sm font-bold transition-colors ${
                      active ? 'bg-eu-blue/5 text-eu-blue' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[10px] font-black uppercase tracking-widest w-6 text-slate-400">
                        {lang.code}
                      </span>
                      <span>{lang.native}</span>
                    </span>
                    {active && <Check className="w-4 h-4 text-eu-blue" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
