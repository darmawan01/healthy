
import React from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { getNutritionAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useLanguage } from '../LanguageContext';

const AINutritionist: React.FC = () => {
  const { language, t } = useLanguage();
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    { role: 'model', text: t.ai.welcome }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Update welcome message when language changes
  React.useEffect(() => {
    setMessages([{ role: 'model', text: t.ai.welcome }]);
  }, [language, t.ai.welcome]);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getNutritionAdvice(userMsg, language);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="ai" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-emerald-600 font-bold mb-4">
            <Sparkles size={20} />
            {t.ai.badge}
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.ai.title}</h2>
          <p className="text-slate-600">{t.ai.subtitle}</p>
        </div>

        <div className="glass-dark rounded-[2.5rem] overflow-hidden shadow-2xl h-[600px] flex flex-col">
          <div className="p-6 border-b border-white/10 flex items-center gap-4 bg-white/5">
            <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <Bot size={28} />
            </div>
            <div>
              <div className="text-white font-bold text-lg">{t.ai.bot_name}</div>
              <div className="text-emerald-400 text-xs font-semibold flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {t.ai.status}
              </div>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar"
          >
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user' ? 'bg-slate-700 text-white' : 'bg-emerald-500 text-white'
                }`}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`max-w-[80%] p-4 rounded-3xl text-sm font-medium leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-emerald-500/20 text-emerald-50 border border-emerald-500/30' 
                    : 'bg-white/10 text-slate-100 border border-white/10'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                <Loader2 className="animate-spin" size={16} />
                {t.ai.thinking}
              </div>
            )}
          </div>

          <div className="p-4 bg-white/5 border-t border-white/10">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.ai.placeholder}
                className="w-full bg-white/10 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 p-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AINutritionist;
