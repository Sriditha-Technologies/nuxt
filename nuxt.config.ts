// https://nuxt.com/docs/api/configuration/nuxt-confi
import {resolve} from "path";
export default defineNuxtConfig({
  alias:{
    "@":resolve(__dirname,"/"),
  },
  css:["~/assets/main.scss"],
      postcss:{
        plugins:{
          tailwindcss:{},
          autoprefixer:{},
        },
      },
 
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/google-fonts','@nuxt/icon','@nuxt/image'],

  });

  

    
