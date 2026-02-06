
import React, { Suspense } from 'react';
import { Plus, Info } from 'lucide-react';
import { Product } from '../types';
const NutritionRadar = React.lazy(() => import('./NutritionRadar'));
import { useLanguage } from '../LanguageContext';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const [showStats, setShowStats] = React.useState(false);
  const { t } = useLanguage();

  const localizedData = t.products[product.id as keyof typeof t.products] || { name: product.name, desc: product.description };

  const radarData = [
    { subject: 'Protein', A: parseInt(product.protein), fullMark: 50 },
    { subject: 'Carbs', A: parseInt(product.carbs), fullMark: 100 },
    { subject: 'Fats', A: parseInt(product.fats), fullMark: 40 },
    { subject: 'Energy', A: product.calories / 10, fullMark: 100 },
    { subject: 'Fiber', A: 30, fullMark: 50 },
  ];

  return (
    <div className="group relative glass rounded-[2.5rem] p-4 transition-all hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
        <div className="relative h-64 mb-6 rounded-[2rem] overflow-hidden">
        <img 
          src={product.image} 
          alt={localizedData.name} 
          loading="lazy"
          decoding="async"
          width="640"
          height="480"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-bold text-emerald-900">
          {product.category}
        </div>
        <button 
          onClick={() => setShowStats(!showStats)}
          className="absolute top-4 right-4 glass p-2 rounded-full text-slate-800 hover:bg-emerald-500 hover:text-white transition-colors"
        >
          <Info size={18} />
        </button>
      </div>

      <div className="px-2">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900">{localizedData.name}</h3>
          <span className="text-xl font-black text-emerald-600">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-slate-500 mb-6 line-clamp-2">
          {localizedData.desc}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-xs font-bold text-slate-400 uppercase">Cal</div>
              <div className="text-sm font-bold text-slate-700">{product.calories}</div>
            </div>
            <div className="w-[1px] h-8 bg-slate-200" />
            <div className="text-center">
              <div className="text-xs font-bold text-slate-400 uppercase">Pro</div>
              <div className="text-sm font-bold text-slate-700">{product.protein}</div>
            </div>
          </div>
          <button className="bg-emerald-900 text-white p-3 rounded-2xl hover:bg-emerald-500 hover:scale-110 transition-all shadow-lg">
            <Plus size={24} />
          </button>
        </div>
      </div>

      {showStats && (
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xl p-8 flex flex-col animate-in fade-in zoom-in duration-300">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-lg">Nutrient Profile</h4>
            <button onClick={() => setShowStats(false)} className="text-slate-400 hover:text-slate-900 font-bold">Close</button>
          </div>
          <Suspense fallback={<div className="py-8 text-center">Loading chart…</div>}>
            <NutritionRadar data={radarData} />
          </Suspense>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="p-3 bg-emerald-50 rounded-2xl">
              <div className="text-xs text-emerald-600 font-bold">Proteins</div>
              <div className="font-bold">{product.protein}</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-2xl">
              <div className="text-xs text-blue-600 font-bold">Carbs</div>
              <div className="font-bold">{product.carbs}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
