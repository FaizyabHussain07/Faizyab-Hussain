/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#07080c',
        'slate-dark': '#0f111a',
        'slate-card': '#131622',
        silver: '#f1f5f9',
        muted: '#94a3b8',
        teal: '#007E8A',
        mustard: '#F0A500',
        gold: '#FFB820',
        'teal-light': '#00A8B8',
        'teal-dark': '#005F68',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'glow': 'glow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(0, 126, 138, 0.1), 0 0 20px rgba(0, 126, 138, 0.05)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 126, 138, 0.25), 0 0 40px rgba(0, 126, 138, 0.15)' }
        }
      }
    },
  },
  plugins: [],
}
