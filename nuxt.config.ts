// https://nuxt.com/docs/api/configuration/nuxt-confi
import {resolve} from "path";
export default defineNuxtConfig({
  alias:{
    "@":resolve(__dirname,"/"),
  },

  css:["~/assets/css/main.css","~/assets/css/styles.css"],
  build: {
    postcss: {
      postcssOptions:{
        plugins:{
          tailwindcss:{},
          autoprefixer:{},
      }
      
      },
    },      
  },

  modules: ['@nuxtjs/tailwindcss','@nuxt/icon','@nuxt/image','@nuxtjs/google-fonts'],
  plugins: ['~/plugins/fontawesome.js'],
  css: [
    './assets/css/main.css',
    'tailwindcss/tailwind.css'
  ],
  compatibilityDate: "2025-03-20"
});