<template>
  <nav class="bg-white shadow-md px-4 py-3 flex justify-between items-center">
    <h1 class="text-gray-800 text-xl">Dashboard</h1>
    <div class="flex items-center space-x-4">
      <input type="text" placeholder="Search..." class="p-2 border border-gray-300 rounded" />
      <nuxt-link to="Sign In" class="text-gray-600"><font-awesome-icon icon="fas fa-user" />Sign In</nuxt-link>
      <font-awesome-icon icon="bell" class="text-gray-600" />
      <font-awesome-icon icon="cog" class="text-gray-600" />
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    FontAwesomeIcon,
  },
};
</script>