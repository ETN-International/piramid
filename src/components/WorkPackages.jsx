import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ClipboardList, BarChart3, BookOpen, PlaneTakeoff } from 'lucide-react';

const WorkPackages = () => {
  const { t } = useTranslation();

  const packages = [
    { id: 'WP1', key: 'wp1', icon: <ClipboardList />, color: 'bg-blue-500' },
    { id: 'WP2', key: 'wp2', icon: <BarChart3 />, color: 'bg-piramid-orange' },
    { id: 'WP3', key: 'wp3', icon: <BookOpen />, color: 'bg-eu-blue' },
    { id: 'WP4', key: 'wp4', icon: <PlaneTakeoff />, color: 'bg-emerald-500' }
  ];

  return (
    <section id="work-packages" className="section-padding bg-slate-900 text-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl font-bold mb-6">{t('workPackages.title')}</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {t('workPackages.subtitle')}
            </p>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <p className="text-3xl font-bold text-piramid-orange mb-2">{t('workPackages.phasesLabel')}</p>
              <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">{t('workPackages.architectureLabel')}</p>
            </div>
          </motion.div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${pkg.color} opacity-10 filter blur-3xl group-hover:opacity-20 transition-opacity`}></div>

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${pkg.color} text-white`}>
                  {pkg.icon}
                </div>

                <span className="text-xs font-black tracking-widest text-white/30 uppercase block mb-2">{pkg.id}</span>
                <h3 className="text-2xl font-bold mb-4">{t(`workPackages.items.${pkg.key}.title`)}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {t(`workPackages.items.${pkg.key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPackages;
