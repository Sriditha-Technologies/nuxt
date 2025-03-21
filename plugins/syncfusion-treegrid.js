import { defineNuxtPlugin } from '#app';
import { TreeGridPlugin } from '@syncfusion/ej2-vue-treegrid';
import { Column } from '@syncfusion/ej2-vue-grids';

// Register the TreeGrid plugin globally
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(TreeGridPlugin);
  nuxtApp.vueApp.component('e-columns', Column);
});
