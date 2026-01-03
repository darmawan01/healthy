
export type Language = 'id' | 'en';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  calories: number;
  protein: string;
  carbs: string;
  fats: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface NutritionFact {
  label: string;
  value: number;
}
