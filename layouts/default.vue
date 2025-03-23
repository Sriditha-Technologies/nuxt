<template>
  <div class="flex h-screen bg-gray-100">
    <Sidebar />
    <div class="flex-1">
      <Navbar />
      <main class="p-5">
        <nuxtpages />
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue';
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Sidebar,
    Navbar,
  },
};
</script>