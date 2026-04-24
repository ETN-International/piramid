import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileText, ClipboardCheck, ExternalLink, Users, Building2, BookOpen } from 'lucide-react';

const Results = () => {
  const { t } = useTranslation();

  const surveyLanguages = [
    { code: 'EN', name: 'English', link: 'https://drive.google.com/file/d/16wQYlCyVpXMbVudIYFX4SGQGuNrjyzpH/view' },
    { code: 'IT', name: 'Italiano', link: 'https://drive.google.com/file/d/1JwcPUwvJWyrdO6PdkmoRrxqzyOO7jtj1/view' },
    { code: 'FR', name: 'Français', link: 'https://drive.google.com/file/d/1Mzrt23jOFC3YSaO5xTh6XHZKXit5nCRx/view' },
    { code: 'PT', name: 'Português', link: 'https://drive.google.com/file/d/PaSJcRGt-7x4rfwOjYMDLXm9z_lE0W87/view' },
    { code: 'ES', name: 'Español', link: 'https://drive.google.com/file/d/1Petg_mlPpSRxDtb0QJeSeUfr6qdzYnoO/view' },
    { code: 'BG', name: 'Български', link: 'https://drive.google.com/file/d/1rwZSwYHlx9mFIDOTVpN932xELBzq6c1x/view' },
    { code: 'PL', name: 'Polski', link: 'https://drive.google.com/file/d/14DSBPuhKjYOOX_tDbcm4VQFiqWdtl5Dg/view' }
  ];

  const results = [
    {
      id: 1,
      key: 'survey',
      icon: <FileText className="w-8 h-8" />,
      type: 'documents',
      languages: surveyLanguages
    },
    {
      id: 2,
      key: 'index',
      icon: <ClipboardCheck className="w-8 h-8" />,
      type: 'link',
      btnTextKey: 'results.accessIndex',
      link: 'https://www.piramiderasmusplusplatform.com/intercultural-index'
    },
    {
      id: 3,
      key: 'students',
      icon: <Users className="w-8 h-8" />,
      type: 'link',
      btnTextKey: 'results.accessCourse',
      link: 'https://www.piramiderasmusplusplatform.com/online-course-for-vet-students'
    },
    {
      id: 4,
      key: 'teachers',
      icon: <BookOpen className="w-8 h-8" />,
      type: 'link',
      btnTextKey: 'results.accessCourse',
      link: 'https://www.piramiderasmusplusplatform.com/online-course-for-vet-teachers'
    },
    {
      id: 5,
      key: 'tutors',
      icon: <Building2 className="w-8 h-8" />,
      type: 'link',
      btnTextKey: 'results.accessCourse',
      link: 'https://www.piramiderasmusplusplatform.com/online-course-for-host-companies'
    }
  ];

  return (
    <section id="results" className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">{t('results.title')}</h2>
          <p className="text-xl text-slate-600">
            {t('results.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((res, index) => {
            const title = t(`results.items.${res.key}.title`);
            const description = t(`results.items.${res.key}.description`, { defaultValue: '' });
            return (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white p-10 rounded-[3rem] border border-slate-100 shadow-premium hover:shadow-2xl transition-all duration-500 flex flex-col group ${res.id === 1 ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <div className="w-16 h-16 bg-eu-blue/10 text-eu-blue rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-eu-blue group-hover:text-white transition-all duration-300">
                  {res.icon}
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{title}</h3>
                {description && (
                  <p className="text-slate-500 mb-10 leading-relaxed font-medium">{description}</p>
                )}

                <div className="mt-auto">
                  {res.type === 'documents' && (
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 mt-6">
                      {res.languages.map((lang) => (
                        <a
                          key={lang.code}
                          href={lang.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-3 px-2 bg-slate-50 rounded-xl border border-slate-100 text-[10px] font-black text-slate-600 hover:bg-eu-blue hover:text-white hover:border-eu-blue transition-all"
                          title={lang.name}
                        >
                          {lang.code}
                        </a>
                      ))}
                    </div>
                  )}

                  {res.type === 'link' && (
                    <a
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-3 py-4 px-8 bg-eu-blue text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-colors shadow-lg shadow-blue-900/20 ${!description ? 'mt-4' : ''}`}
                    >
                      {t(res.btnTextKey)}
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Results;
