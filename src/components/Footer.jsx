import React, { useState } from 'react';
import { Mail, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Footer = () => {
  const { t } = useTranslation();
  const [logoError, setLogoError] = useState(false);

  const quickLinks = [
    { key: 'about', anchor: 'about' },
    { key: 'objectives', anchor: 'objectives' },
    { key: 'partners', anchor: 'partners' },
    { key: 'results', anchor: 'results' },
    { key: 'news', anchor: 'news' }
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-24 pb-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Logo & Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-4 mb-8">
              {!logoError ? (
                <img
                  src={logo}
                  alt="PIRAMID Logo"
                  className="h-16 w-auto object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-12 h-12 bg-eu-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                  P
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter text-eu-blue leading-none">P.IR.A.M.iD</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{t('nav.tagline')}</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'YouTube', icon: <Youtube size={18} />, href: 'https://www.youtube.com/@piramiderasmusplus/videos' },
                { name: 'TikTok', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15z"/></svg>, href: 'https://www.tiktok.com/@piramiderasmusplus' }
              ].map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-eu-blue hover:border-eu-blue hover:shadow-lg transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-[10px]">{t('footer.projectHeading')}</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              {quickLinks.map((item) => (
                <li key={item.key}>
                  <a href={`/#${item.anchor}`} className="hover:text-eu-blue transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-eu-blue mr-0 group-hover:mr-2 transition-all"></span>
                    {t(`nav.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-[10px]">{t('footer.contactHeading')}</h4>
            <ul className="space-y-6 text-sm text-slate-600">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-eu-blue shrink-0" />
                <a href="mailto:info@piramiderasmusplus.eu" className="hover:text-eu-blue font-bold">info@piramiderasmusplus.eu</a>
              </li>
            </ul>
          </div>

          {/* EU & Secondary Disclaimer Card */}
          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-premium relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 w-24 h-24 bg-eu-blue/5 rounded-full -translate-y-12 translate-x-12"></div>

            <div className="relative z-10 w-full flex flex-col items-center">
              <img
                src="/eu-logo.png"
                alt={t('euFunding.altText')}
                className="h-20 w-auto object-contain mb-6"
                onError={(e) => (e.target.style.display = 'none')}
              />

              <p className="text-[11px] text-slate-400 leading-relaxed italic font-medium mb-6">
                {t('footer.funded')}
              </p>

              <div className="h-px w-full bg-slate-100 mb-6"></div>

              <img
                src="/footer-logo.png"
                alt="Institutional Logo"
                className="h-16 w-auto object-contain"
                onError={(e) => (e.target.style.display = 'none')}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <div className="flex space-x-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-eu-blue transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-eu-blue transition-colors">{t('footer.cookies')}</a>
            <a href="#" className="hover:text-eu-blue transition-colors">{t('footer.legal')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
