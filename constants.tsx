
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Zen Garden Bowl',
    description: 'A harmonious blend of quinoa, roasted chickpeas, kale, and lemon-tahini dressing.',
    price: 12.99,
    category: 'Salads',
    calories: 450,
    protein: '15g',
    carbs: '60g',
    fats: '18g',
    image: 'https://picsum.photos/seed/salad1/800/600'
  },
  {
    id: '2',
    name: 'Acai Power Blast',
    description: 'Antioxidant-rich acai base with hemp seeds, goji berries, and banana slices.',
    price: 9.50,
    category: 'Breakfast',
    calories: 320,
    protein: '8g',
    carbs: '55g',
    fats: '12g',
    image: 'https://picsum.photos/seed/smoothie1/800/600'
  },
  {
    id: '3',
    name: 'Miso Glazed Salmon',
    description: 'Wild-caught salmon with steamed bok choy and purple forbidden rice.',
    price: 18.50,
    category: 'Main Course',
    calories: 580,
    protein: '35g',
    carbs: '40g',
    fats: '22g',
    image: 'https://picsum.photos/seed/salmon1/800/600'
  },
  {
    id: '4',
    name: 'Green Immunity Elixir',
    description: 'Cold-pressed kale, spinach, green apple, ginger, and a dash of turmeric.',
    price: 7.00,
    category: 'Beverages',
    calories: 120,
    protein: '2g',
    carbs: '25g',
    fats: '1g',
    image: 'https://picsum.photos/seed/juice1/800/600'
  }
];

export const NAV_LINKS = [
  { name: 'Home', hash: '#/' },
  { name: 'Menu', hash: '#/menu' },
  { name: 'AI Nutritionist', hash: '#/ai' },
  { name: 'Our Mission', hash: '#/mission' }
];
