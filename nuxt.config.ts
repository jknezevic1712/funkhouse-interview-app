// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['/layouts/global.css'],
  devtools: { enabled: true },
  nitro: {
    devServer: {
      watch: ['./app.vue', './components', './pages'],
    },
  },
  modules: ['@pinia/nuxt'],
});
