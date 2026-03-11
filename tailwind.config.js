/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ef4444', // red-500
        dark: '#050509',
        'dark-elevated': '#0b0b13',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        'soft-red': '0 20px 60px rgba(239, 68, 68, 0.35)',
      },
    },
  },
  plugins: [],
}

