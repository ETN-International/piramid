import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, ArrowRight, Search } from 'lucide-react';
import { newsData } from '../data/newsData';

const AllNews = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return newsData;
    return newsData.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.excerpt.toLowerCase().includes(q) ||
        n.date.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container-custom">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-eu-blue transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t('allNews.backHome')}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              {t('allNews.title')}
            </h1>
            <p className="text-xl text-slate-600 font-medium">
              {t('allNews.subtitle')}
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('allNews.searchPlaceholder')}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-eu-blue/30 focus:border-eu-blue transition-all"
            />
          </div>
        </motion.div>

        <div className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-500">
          {filtered.length} {t('allNews.article', { count: filtered.length })}
        </div>

        {filtered.length === 0 ? (
          <div className="py-24 text-center text-slate-500 font-medium">
            {t('allNews.noResults')}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.03, 0.4) }}
                className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-premium hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm border border-white/20">
                    <Calendar size={14} className="text-eu-blue" />
                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                      {item.date}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-lg font-black text-slate-900 mb-3 line-clamp-2 leading-tight group-hover:text-eu-blue transition-colors uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                    {item.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={`/news/${item.id}`}
                      className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 group/btn hover:text-eu-blue transition-colors"
                    >
                      {t('news.readStory')}
                      <div className="w-9 h-9 rounded-2xl bg-slate-100 flex items-center justify-center group-hover/btn:bg-eu-blue group-hover/btn:text-white transition-all duration-300">
                        <ArrowRight size={14} />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllNews;
