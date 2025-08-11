import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { navy: '#003366', teal: '#00A38C', orange: '#F9A13B', grayBg: '#F5F7FA' }
      }
    }
  },
  plugins: []
};
export default config;
