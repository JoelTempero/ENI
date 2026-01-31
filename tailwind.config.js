/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium dark palette
        void: {
          950: '#030303',
          900: '#0a0a0b',
          800: '#121214',
          700: '#1a1a1e',
          600: '#252529',
        },
        // Electric accent
        electric: {
          50: '#eef8ff',
          100: '#d9efff',
          200: '#bce4ff',
          300: '#8ed4ff',
          400: '#59bbff',
          500: '#339dff',
          600: '#1a7ef5',
          700: '#1366e1',
          800: '#1652b6',
          900: '#18478f',
        },
        // Warm accent for CTAs
        flame: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        // Success/eco tones
        mint: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
      },
      fontFamily: {
        display: ['Clash Display', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        'display-xl': ['clamp(3rem, 10vw, 7rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2.5rem, 7vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
        },
        glow: {
          '0%': { opacity: 0.5, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px var(--tw-shadow-color)',
        'glow-md': '0 0 40px -5px var(--tw-shadow-color)',
        'glow-lg': '0 0 60px -5px var(--tw-shadow-color)',
        'inner-glow': 'inset 0 0 60px -10px var(--tw-shadow-color)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
