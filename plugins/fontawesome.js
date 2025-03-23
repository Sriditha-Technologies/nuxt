import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'; // You can import other icons as needed

// Add the solid icons to the library
library.add(fas);

export default defineNuxtPlugin((nuxtApp) => {
  // Register the FontAwesomeIcon component globally
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});