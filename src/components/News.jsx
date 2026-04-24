import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';

const News = () => {
  // Show only the latest 3 on the home page
  const displayedNews = newsData.slice(0, 3);

  return (
    <section id="news" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Latest News</h2>
            <p className="text-xl text-slate-600 font-medium">
              Stay updated with the latest events, training launches, and project milestones 
              from across the PIRAMID consortium.
            </p>
          </div>
          <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-eu-blue transition-all flex items-center gap-3 group">
            View All News
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayedNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-premium hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm border border-white/20">
                  <Calendar size={14} className="text-eu-blue" />
                  <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{item.date}</span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-slate-900 mb-4 line-clamp-2 leading-tight group-hover:text-eu-blue transition-colors uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                  {item.excerpt}
                </p>
                <div className="mt-auto">
                  <Link 
                    to={`/news/${item.id}`}
                    className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 group/btn hover:text-eu-blue transition-colors"
                  >
                    Read Story
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center group-hover/btn:bg-eu-blue group-hover/btn:text-white transition-all duration-300">
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
