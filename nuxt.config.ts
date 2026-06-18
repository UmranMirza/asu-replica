// nuxt.config.ts
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  modules: ['@nuxt/eslint'],

  css: [
    '@rds-vue-ui/rds-theme-base/style/rds-theme-base.scss',
    '~/assets/styles/main.scss',
    '@fortawesome/fontawesome-free/css/all.min.css',
  ],

  build: {
    transpile: ['@rds-vue-ui'],
  },

  vite: {
    build: {
      sourcemap: false,
      cssCodeSplit: true,
    },

    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
        },
      },
    },
  },
})
