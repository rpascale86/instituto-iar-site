import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { brand: { blue: '#0F4C81', blueDark: '#08324F', green: '#2E8B57', greenSoft: '#E8F5EE', cream: '#FFF9F1', red: '#E94F37', yellow: '#F2C94C' } }, boxShadow: { soft: '0 20px 50px rgba(15, 76, 129, 0.12)' }, backgroundImage: { hero: 'linear-gradient(135deg, rgba(15,76,129,0.96), rgba(46,139,87,0.92))' } } },
  plugins: []
};
export default config;
