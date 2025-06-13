import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)'
      },
      colors: {
        choco: {
          50: 'var(--color-choco-50)',
          100: 'var(--color-choco-100)',
          200: 'var(--color-choco-200)',
          300: 'var(--color-choco-300)'
        },
        mint: {
          50: 'var(--color-mint-50)',
          100: 'var(--color-mint-100)',
          200: 'var(--color-mint-200)',
          300: 'var(--color-mint-300)'
        },
        thai: {
          200: 'var(--color-thai-200)',
          300: 'var(--color-thai-300)'
        }
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-20px)' },
          '75%': { transform: 'translateY(20px)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      }
    }
  }
};
export default config;
