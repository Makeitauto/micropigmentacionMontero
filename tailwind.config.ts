import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          white: '#FFFFFF',
          black: '#111111',
          'black-soft': '#222222',
          gold: '#C6A667',
          'gold-light': '#D4B87A',
          'blue-gray': '#3A4B57',
          taupe: '#E5E1DC',
          'skin-light': '#F5F1EB',
        },
      },
      fontFamily: {
        display: [
          'var(--font-display)',
          'Neue Haas Grotesk',
          'Söhne',
          'Montserrat',
          'system-ui',
          'sans-serif',
        ],
        body: [
          'var(--font-body)',
          'Inter',
          'Helvetica Now',
          'SF Pro Text',
          'system-ui',
          'sans-serif',
        ],
      },
      letterSpacing: {
        'wide-premium': '0.1em',
        'wider-premium': '0.15em',
      },
      borderRadius: {
        'premium': '8px',
        'premium-lg': '12px',
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'premium-lg': '0 8px 40px rgba(0, 0, 0, 0.12)',
        'premium-gold': '0 4px 20px rgba(198, 166, 103, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

