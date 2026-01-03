
import React from 'react';
import { Leaf, ShoppingBag, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-500 p-2 rounded-xl text-white shadow-lg shadow-emerald-200">
            <Leaf size={24} />
          </div>
          <span className="text-xl font-bold text-emerald-900 tracking-tight">Verdant<span className="text-emerald-500">Bites</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#/" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">{t.nav.home}</a>
          <a href="#menu" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">{t.nav.menu}</a>
          <a href="#ai" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">{t.nav.ai}</a>
          <a href="#mission" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">{t.nav.mission}</a>
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-xl text-xs font-bold text-emerald-700 hover:bg-emerald-100 transition-all uppercase"
          >
            <Globe size={14} />
            {language}
          </button>

          <button className="bg-emerald-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-800 transition-all shadow-lg hover:shadow-emerald-200">
            {t.nav.order}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="p-2 glass rounded-lg text-emerald-700 font-bold text-xs uppercase"
          >
            {language}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          <a href="#/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700 py-2 border-b border-emerald-100">{t.nav.home}</a>
          <a href="#menu" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700 py-2 border-b border-emerald-100">{t.nav.menu}</a>
          <a href="#ai" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700 py-2 border-b border-emerald-100">{t.nav.ai}</a>
          <a href="#mission" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700 py-2 border-b border-emerald-100">{t.nav.mission}</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
