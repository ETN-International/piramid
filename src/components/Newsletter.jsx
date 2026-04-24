import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    
    try {
      // We use a hidden iframe approach to submit without CORS issues and without redirecting the user
      const form = e.target;
      const iframe = document.createElement('iframe');
      iframe.name = 'ml_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      form.target = 'ml_iframe';
      form.submit();
      
      // Since we can't easily read the iframe response due to security, 
      // and we saw it returns {"success":true}, we'll wait a bit and then show success
      setTimeout(() => {
        setStatus('success');
        document.body.removeChild(iframe);
      }, 1500);
      
    } catch (error) {
      console.error('Newsletter error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-eu-blue relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/10">
            <Send className="text-white w-10 h-10" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            {t('newsletter.title')}
          </h2>
          <p className="text-xl text-white/80 mb-12 font-medium">
            {t('newsletter.subtitle')}
          </p>

          <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden border-4 border-white/10 min-h-[200px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6"
                >
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart fill="currentColor" size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight uppercase">{t('newsletter.thankYou')}</h3>
                  <p className="text-slate-500 font-bold">{t('newsletter.successMessage')}</p>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  exit={{ opacity: 0, y: -20 }}
                >
                  <form 
                    action="https://assets.mailerlite.com/jsonp/226112/forms/139597599031166649/subscribe" 
                    method="post" 
                    onSubmit={handleSubmit}
                    className="flex flex-col md:flex-row gap-4 items-stretch"
                  >
                    <div className="flex-grow relative">
                      <input
                        type="email"
                        name="fields[email]"
                        placeholder={t('newsletter.placeholder')}
                        className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-2 border-slate-100 text-slate-900 font-bold focus:outline-none focus:border-eu-blue transition-all disabled:opacity-50"
                        required
                        disabled={status === 'loading'}
                      />
                    </div>
                    
                    <input type="hidden" name="ml-submit" value="1" />
                    <input type="hidden" name="anticsrf" value="true" />
                    
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="px-12 py-5 bg-eu-blue text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 shrink-0 disabled:bg-slate-300"
                    >
                      {status === 'loading' ? t('newsletter.sending') : t('newsletter.subscribe')}
                      <Send className="w-4 h-4" />
                    </button>
                  </form>

                  <div className="mt-8 flex items-center justify-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      {t('newsletter.noSpam')}
                    </span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      {t('newsletter.unsubscribe')}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <p className="mt-10 text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">
            {t('newsletter.join')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
