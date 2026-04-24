import React from 'react';
import { motion } from 'framer-motion';
import { partnersData } from '../data/partnersData';
import { ExternalLink } from 'lucide-react';

const Partners = () => {
  return (
    <section id="partners" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Partners</h2>
          <p className="text-xl text-slate-500 font-medium">
            A strategic partnership of five organizations across Europe dedicated to 
            intercultural measurement and development in the tourism sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {partnersData.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <a 
                href={partner.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <div className="w-full aspect-square bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-500 mb-6 group-hover:shadow-2xl group-hover:-translate-y-3 group-hover:bg-white overflow-hidden relative">
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} className="text-eu-blue" />
                  </div>
                  
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-w-full max-h-full object-contain relative z-10"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback Placeholder (hidden if image loads) */}
                    <div className="absolute inset-0 hidden flex-col items-center justify-center bg-slate-50 rounded-2xl">
                      <div className="text-xl font-black text-slate-300 group-hover:text-eu-blue transition-colors text-center px-2">
                        {partner.name.split(' ')[0]}
                      </div>
                      <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mt-1">Visit Site</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center px-2">
                  <p className="font-black text-slate-900 text-sm group-hover:text-eu-blue transition-colors mb-1 leading-tight">
                    {partner.name}
                  </p>
                  <div className="flex items-center justify-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{partner.country}</span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
