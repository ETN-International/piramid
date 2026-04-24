import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { newsData } from '../data/newsData';

const NewsDetail = () => {
  const { id } = useParams();
  const news = newsData.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">News not found</h2>
          <Link to="/" className="text-eu-blue hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-20">
      <div className="container-custom">
        <Link to="/" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-eu-blue transition-colors mb-8 group">
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6 text-slate-500">
            <Calendar size={16} className="text-eu-blue" />
            <span className="text-sm font-semibold tracking-wide uppercase">{news.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
            {news.title}
          </h1>

          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12">
            <img 
              src={news.image} 
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
                <p className="text-xl font-medium text-slate-900 leading-relaxed">
                  {news.excerpt}
                </p>
                <div className="h-px bg-slate-100 my-8"></div>
                {news.content.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-4 py-8 border-t border-slate-100">
                <span className="text-sm font-bold text-slate-900">Share this update:</span>
                <div className="flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <button key={i} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-eu-blue hover:border-eu-blue transition-all">
                      <Share2 size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-4">Project Summary</h4>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    PIRAMID is an Erasmus+ project focused on intercultural awareness in the tourism industry.
                  </p>
                  <Link to="/" className="text-sm font-black text-eu-blue hover:underline">Learn about PIRAMID</Link>
                </div>
                
                <div className="bg-eu-blue p-8 rounded-3xl text-white shadow-xl shadow-blue-900/20">
                  <h4 className="font-bold mb-4">Join our Newsletter</h4>
                  <p className="text-white/70 text-sm mb-6">Stay informed about upcoming events and project milestones.</p>
                  <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 mb-4 focus:outline-none focus:ring-2 focus:ring-white/30" />
                  <button className="w-full py-3 bg-white text-eu-blue font-bold rounded-xl hover:bg-slate-100 transition-colors">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
};

export default NewsDetail;
