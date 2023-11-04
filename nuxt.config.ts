// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI
  },
  //register nitro for db connection
  nitro: {
    plugins: ["@/server/db/index.ts"],
  },
})
