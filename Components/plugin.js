// plugin.js
import { defineComponent } from 'vue';
import EColumn from 'path/to/EColumn.vue';
import EColumns from 'path/to/EColumns.vue';

export default defineNuxtPlugin((nuxtApp) => {
  // Only register if not already registered
  if (!nuxtApp.vueApp.component('e-column')) {
    nuxtApp.vueApp.component('e-column', EColumn);
  }

  if (!nuxtApp.vueApp.component('e-columns')) {
    nuxtApp.vueApp.component('e-columns', EColumns);
  }
});