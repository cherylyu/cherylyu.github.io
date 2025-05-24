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
        mint: {
          500: 'var(--color-mint-500)',
          700: 'var(--color-mint-700)'
        }
      }
    }
  }
};
export default config;
