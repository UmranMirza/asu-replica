// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/eslint'],

  css: ['~~/assets/styles/main.scss', '@fortawesome/fontawesome-free/css/all.min.css'],
})
