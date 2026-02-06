
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-200/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[0%] right-[-5%] w-[30%] h-[30%] bg-green-200/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            {t.hero.badge}
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            {t.hero.title_part1} <span className="text-emerald-500">{t.hero.title_part2}</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="w-full sm:w-auto bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-200 hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 group">
              {t.hero.cta_primary}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto glass px-8 py-4 rounded-2xl font-bold text-lg text-slate-800 hover:bg-white/40 transition-all">
              {t.hero.cta_secondary}
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-4 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  loading="lazy"
                  decoding="async"
                  width="40"
                  height="40"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm" 
                  alt="User" 
                />
              ))}
            </div>
            <p className="text-sm text-slate-500 font-medium">
              {t.hero.stats.split('2,000+').map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i === 0 && <span className="text-slate-900 font-bold">2,000+</span>}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative animate-float">
            <img 
              src="https://picsum.photos/seed/healthybowl/800/800" 
              loading="lazy"
              decoding="async"
              width="800"
              height="800"
              className="rounded-[2rem] shadow-2xl border-8 border-white object-cover aspect-square max-w-full"
              alt="Healthy Food"
            />
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl shadow-2xl max-w-[200px]">
              <div className="text-emerald-600 font-bold text-2xl mb-1">98%</div>
              <div className="text-slate-500 text-xs font-semibold leading-tight">Customer satisfaction with our meal plans</div>
            </div>
            <div className="absolute -top-6 -right-6 glass-dark p-6 rounded-3xl shadow-2xl text-white">
              <div className="text-sm font-bold flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Live AI Advice
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
