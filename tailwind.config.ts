import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f1ea',
          100: '#efe3d5',
          200: '#d9c1a3',
          300: '#c29e71',
          400: '#8D5B30',
          500: '#4F3408',
          600: '#3F1C15',
          700: '#33200F',
          800: '#33200F',
          900: '#1a0f06',
          950: '#0d0703',
        },
        gold: {
          50: '#faf6ee',
          100: '#EFE8B9',
          200: '#e5d99a',
          300: '#d4c06e',
          400: '#8D5B30',
          500: '#753429',
          600: '#4F3408',
        },
        cream: {
          50: '#EFE8B9',
          100: '#f5f0d9',
          200: '#ebe1c3',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        display: ['var(--font-nexa)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #33200F 0%, #4F3408 50%, #3F1C15 100%)',
        'gradient-gold': 'linear-gradient(135deg, #753429 0%, #8D5B30 50%, #753429 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
