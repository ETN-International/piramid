import React from 'react';
import { motion } from 'framer-motion';

const EUFunding = () => {
  return (
    <section className="bg-slate-50 border-y border-slate-100 py-16">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-16 text-center md:text-left"
        >
          <div className="bg-white p-8 rounded-3xl shadow-premium border border-slate-200">
            <img 
              src="/eu-logo.png" 
              alt="Co-funded by the European Union" 
              className="h-24 md:h-32 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback structure */}
            <div className="hidden items-center gap-6">
              <div className="w-24 h-16 bg-[#003399] flex items-center justify-center relative rounded-md">
                <div className="grid grid-cols-4 gap-1 transform rotate-45">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-[#FFCC00] rounded-full"></div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Co-funded by the</p>
                <p className="text-2xl font-black text-slate-900 leading-none">European Union</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-xl">
            <p className="text-base text-slate-500 leading-relaxed italic font-medium">
              "This project has been funded with support from the European Commission. This publication reflects the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EUFunding;
