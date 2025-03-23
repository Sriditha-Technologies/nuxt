import { defineNuxtPlugin } from '#app';
import { TreeGridPlugin } from '@syncfusion/ej2-vue-treegrid';

// Register the TreeGrid plugin globally
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(TreeGridPlugin);
 
});
