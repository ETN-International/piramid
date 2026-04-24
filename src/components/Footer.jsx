import React, { useState } from 'react';
import { Mail, Facebook, Twitter, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const [logoError, setLogoError] = useState(false);

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
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Erasmus+ Project</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs">
              Path for Intercultural Awareness, Measurement and Development. 
              A European project focusing on the tourism sector and VET education.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Linkedin'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-eu-blue hover:border-eu-blue hover:shadow-lg transition-all duration-300">
                  {social === 'Facebook' && <Facebook size={18} />}
                  {social === 'Twitter' && <Twitter size={18} />}
                  {social === 'Linkedin' && <Linkedin size={18} />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-[10px]">Project</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              {['About', 'Objectives', 'Partners', 'Results', 'News'].map((item) => (
                <li key={item}>
                  <a href={`/#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-eu-blue transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-eu-blue mr-0 group-hover:mr-2 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-[10px]">Contact</h4>
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
                alt="Co-funded by the European Union" 
                className="h-20 w-auto object-contain mb-6"
                onError={(e) => e.target.style.display = 'none'}
              />
              
              <p className="text-[11px] text-slate-400 leading-relaxed italic font-medium mb-6">
                Funded by the Erasmus+ Programme of the European Union. Project ID: 2023-1-ES01-KA220-VET-000157060
              </p>

              <div className="h-px w-full bg-slate-100 mb-6"></div>

              <img 
                src="/footer-logo.png" 
                alt="Institutional Logo" 
                className="h-16 w-auto object-contain"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} P.IR.A.M.iD Project • All rights reserved
          </p>
          <div className="flex space-x-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-eu-blue transition-colors">Privacy</a>
            <a href="#" className="hover:text-eu-blue transition-colors">Cookies</a>
            <a href="#" className="hover:text-eu-blue transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
