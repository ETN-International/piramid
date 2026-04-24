import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Users, Globe2, Lightbulb, GraduationCap, Building2, Share2, ShieldCheck, UserCheck } from 'lucide-react';

const Objectives = () => {
  const { t } = useTranslation();

  const objectives = [
    { key: 'integration', icon: <Users className="w-8 h-8" /> },
    { key: 'dialogue', icon: <Globe2 className="w-8 h-8" /> },
    { key: 'innovative', icon: <Lightbulb className="w-8 h-8" /> },
    { key: 'vet', icon: <GraduationCap className="w-8 h-8" /> },
    { key: 'company', icon: <Building2 className="w-8 h-8" /> },
    { key: 'cooperation', icon: <Share2 className="w-8 h-8" /> },
    { key: 'european', icon: <ShieldCheck className="w-8 h-8" /> },
    { key: 'skill', icon: <UserCheck className="w-8 h-8" /> }
  ];

  return (
    <section id="objectives" className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">{t('objectives.title')}</h2>
          <p className="text-lg text-slate-600">
            {t('objectives.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((obj, index) => (
            <motion.div
              key={obj.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100"
            >
              <div className="w-16 h-16 bg-eu-blue/10 rounded-xl flex items-center justify-center text-eu-blue group-hover:bg-eu-blue group-hover:text-white transition-colors mb-6">
                {obj.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t(`objectives.items.${obj.key}.title`)}</h3>
              <p className="text-slate-600 leading-relaxed">{t(`objectives.items.${obj.key}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
