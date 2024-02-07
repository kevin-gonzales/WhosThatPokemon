// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBase: "https://tyradex.vercel.app/api/v1"
    }
  },
})
