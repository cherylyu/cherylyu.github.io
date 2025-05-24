// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@nuxtjs/tailwindcss'],
  css: ['@/assets/css/variables.css'],
  fonts: {
    families: [
      {
        name: 'Rubik',
        weights: [400, 500, 600, 700, 800],
        styles: ['normal']
      }
    ]
  }
});
