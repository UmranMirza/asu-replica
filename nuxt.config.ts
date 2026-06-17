// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Change '~/' to '~~/' or '@/' to map to the root of the project
  css: ['~~/assets/styles/main.scss','@fortawesome/fontawesome-free/css/all.min.css'],
})