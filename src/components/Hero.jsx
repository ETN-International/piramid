import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-40 pb-20 overflow-hidden bg-slate-900">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-eu-blue/5 z-0"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.2] mb-12 tracking-tight">
              Path for <span className="text-eu-blue italic">Intercultural</span> Awareness, Measurement and <span className="text-piramid-orange uppercase tracking-widest text-3xl md:text-5xl block mt-2">Development</span>
            </h1>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="https://www.piramiderasmusplusplatform.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-eu-blue text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-eu-blue transition-all duration-300 shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 group"
              >
                Access Platform
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#about"
                className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-3"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 max-w-lg ml-auto">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="Consortium Collaboration"
                className="w-full h-auto object-cover aspect-video lg:aspect-square"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-piramid-orange/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
