import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        'xxs': '360px',
        'xxxs2': '320px',
        'lgCustom1': '1100px',
        'lgCustom2': '1200px',
        '3xl': '1800px',
        '4xl': '2000px',
      },
      colors: {
        'mg-red': '#C8102E',
        'mg-dark': '#181818',
        'mg-gray': '#F7F7F7',
        'mg-muted': '#ADADAD',
        'mg-electric': '#29C5E8',
        'mg-green': '#15DB41',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      transitionDuration: {
        '400': '400ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease forwards',
        slideIn: 'slideIn 0.3s ease forwards',
      },
    },
  },
  plugins: [],
}
export default config
