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
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-sans">Latest News</h2>
            <p className="text-lg text-slate-600">
              Stay updated with the latest events, training launches, and project milestones 
              from across the PIRAMID consortium.
            </p>
          </div>
          <button className="text-eu-blue font-bold flex items-center hover:underline group">
            View All News
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayedNews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-sm">
                  <Calendar size={14} className="text-eu-blue" />
                  <span className="text-xs font-bold text-slate-900">{item.date}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-eu-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="mt-auto">
                  <Link 
                    to={`/news/${item.id}`}
                    className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-2 group/btn hover:text-eu-blue transition-colors"
                  >
                    Read More
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center group-hover/btn:bg-eu-blue group-hover/btn:text-white transition-all">
                      <ArrowRight size={14} />
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
