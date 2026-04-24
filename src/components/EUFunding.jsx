import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const EUFunding = () => {
  const { t } = useTranslation();
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
              alt={t('euFunding.altText')}
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
                <p className="text-2xl font-black text-slate-900 leading-none">{t('euFunding.altText')}</p>
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-base text-slate-500 leading-relaxed italic font-medium">
              "{t('euFunding.disclaimer')}"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EUFunding;
