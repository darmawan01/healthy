
import { Language } from '../types';

export const getNutritionAdvice = async (userPrompt: string, lang: Language) => {
  const API_KEY = process.env.API_KEY || '';
  if (!API_KEY) return "I'm currently resting. Please ensure the system API key is configured.";

  // Dynamically import the Google GenAI client only when requested
  try {
    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey: API_KEY });

    const langInstruction = lang === 'id'
      ? "You must respond in Indonesian language."
      : "You must respond in English language.";

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are 'Verdi', an expert nutritionist for the platform 'Verdant Bites'.\nYou recommend healthy food choices. Keep your tone encouraging, modern, and concise.\nFocus on whole foods, macro-nutrients, and wellness tips.\n${langInstruction}\nIf the user asks about the menu, mention items like 'Zen Garden Bowl', 'Acai Power Blast', 'Miso Glazed Salmon', or 'Green Immunity Elixir'.`,
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
