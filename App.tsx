
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import AINutritionist from './components/AINutritionist';
import { PRODUCTS } from './constants';
import { Leaf, Award, ShieldCheck, HeartPulse } from 'lucide-react';
import { LanguageProvider, useLanguage } from './LanguageContext';

const AppContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Categories / Stats Section */}
        <section className="py-20 px-4 bg-white/30 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Leaf className="text-emerald-500" />, title: t.stats.organic.title, desc: t.stats.organic.desc },
              { icon: <Award className="text-amber-500" />, title: t.stats.chef.title, desc: t.stats.chef.desc },
              { icon: <ShieldCheck className="text-blue-500" />, title: t.stats.clean.title, desc: t.stats.clean.desc },
              { icon: <HeartPulse className="text-red-500" />, title: t.stats.perform.title, desc: t.stats.perform.desc }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 glass rounded-3xl hover:bg-white transition-all shadow-sm hover:shadow-xl">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-inner">
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.menu.title}</h2>
                <p className="text-slate-600 max-w-lg">{t.menu.subtitle}</p>
              </div>
              <div className="flex gap-2">
                {t.menu.cats.map(cat => (
                  <button key={cat} className="px-5 py-2 glass rounded-full text-sm font-bold text-slate-700 hover:bg-emerald-500 hover:text-white transition-all">
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {PRODUCTS.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <AINutritionist />

        {/* Newsletter / CTA */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto glass-dark rounded-[3rem] p-12 lg:p-24 relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-green-500/10 rounded-full blur-[80px] -z-10" />
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">{t.cta.subtitle}</p>
            
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder={t.cta.input} 
                className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-white"
              />
              <button className="bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">
                {t.cta.button}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-emerald-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 p-2 rounded-xl text-white">
              <Leaf size={20} />
            </div>
            <span className="text-xl font-bold text-emerald-900">Verdant<span className="text-emerald-500">Bites</span></span>
          </div>
          <p className="text-sm text-slate-400">© 2024 Verdant Bites. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
