/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Inter", sans-serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
        blue: {
          400: '#4EA8DE',
          700: '#1E6F9F',
        },
        purple: {
          400: '#8284FA',
          700: '#5E60CE',
        },
        // ...
      },
    },
  },
  plugins: [],
}
