import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const About = () => {
  const { t } = useTranslation();
  const [logoError, setLogoError] = useState(false);

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-6 mb-8">
              {!logoError && (
                <img 
                  src={logo} 
                  alt="PIRAMID Logo" 
                  className="h-24 md:h-32 w-auto object-contain"
                  onError={() => setLogoError(true)}
                />
              )}
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 relative">
                {t('about.title')}
                <span className="absolute -bottom-3 left-0 w-24 h-2 bg-piramid-orange rounded-full"></span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-slate-600 leading-relaxed">
                <strong className="text-eu-blue font-black">{t('about.leadBold')}</strong>{t('about.leadRest')}
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                {t('about.body')}
              </p>
            </div>

            <div className="mt-12 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{t('about.projectNumberLabel')}</p>
              <p className="text-xl font-black text-eu-blue">2023-1-ES01-KA220-VET-000157060</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative large logo background */}
            {!logoError && (
              <img 
                src={logo} 
                alt="" 
                className="absolute -top-20 -right-20 w-80 h-80 object-contain opacity-[0.03] pointer-events-none"
              />
            )}
            
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="space-y-6">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" 
                    alt="VET Education" 
                    className="w-full h-full object-cover aspect-[3/4]"
                  />
                </div>
                <div className="h-40 bg-piramid-orange rounded-[3rem] shadow-xl shadow-orange-500/20"></div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="h-40 bg-eu-blue rounded-[3rem] shadow-xl shadow-blue-500/20"></div>
                <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" 
                    alt="Multicultural Environment" 
                    className="w-full h-full object-cover aspect-[3/4]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
