<template>
  <aside class="wt-64 bg-white shadow-md">
    <div class="p-5">
      <h1 class="font-bold justify-center">Material Tailwind React</h1>
    </div>
    <ul class="mt-4">
      <li><nuxt-link to="/dashboard/dashboard" class="block p-4 hover:bg-gray-200"><FontAwesomeIcon icon="fas fa-tachometer-alt" />Dashboard</nuxt-link></li>
      <li><nuxt-link to="/dashboard/Profile" class="block p-4 hover:bg-gray-200"><font-awesome-icon icon="fas fa-user" />Profile</nuxt-link></li>
      <li><nuxt-link to="/dashboard/tables" class="block p-4 hover:bg-gray-200"><FontAwesomeIcon icon="fas fa-table" />Tables</nuxt-link></li>
      <li><nuxt-link to="/dashboard/notifications" class="block p-4 hover:bg-gray-200"><FontAwesomeIcon icon="fas fa-bell" />Notifications</nuxt-link></li>
      <div class="p-5">
        <h3 class="font-bold justify-center">Auth Pages</h3>
      </div>
      <li><nuxt-link to="/dashboard/sign-in" class="block p-4 hover:bg-gray-200"><FontAwesomeIcon icon="fas fa-sign-in-alt" />Sign In</nuxt-link></li>
      <li><nuxt-link to="/dashboard/sign-up" class="block p-4 hover:bg-gray-200"><FontAwesomeIcon icon="fas fa-user-plus" />Sign Up</nuxt-link></li>
    </ul>
  </aside>
</template>

<script setup>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

</script>

