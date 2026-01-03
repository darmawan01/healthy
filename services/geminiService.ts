
import { GoogleGenAI, Type } from "@google/genai";
import { Language } from '../types';

const API_KEY = process.env.API_KEY || '';

export const getNutritionAdvice = async (userPrompt: string, lang: Language) => {
  if (!API_KEY) return "I'm currently resting. Please ensure the system API key is configured.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const langInstruction = lang === 'id' 
    ? "You must respond in Indonesian language." 
    : "You must respond in English language.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are 'Verdi', an expert nutritionist for the platform 'Verdant Bites'. 
        You recommend healthy food choices. Keep your tone encouraging, modern, and concise. 
        Focus on whole foods, macro-nutrients, and wellness tips. 
        ${langInstruction}
        If the user asks about the menu, mention items like 'Zen Garden Bowl', 'Acai Power Blast', 'Miso Glazed Salmon', or 'Green Immunity Elixir'.`,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === 'id' 
      ? "Maaf, ada gangguan teknis. Mari coba lagi nanti." 
      : "I encountered a digital hiccup. Let's try that again later.";
  }
};
