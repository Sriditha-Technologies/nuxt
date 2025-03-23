<template>
    <aside class="w-64 bg-white shadow-md">
      <div class="p-5">
        <h1 class="font-bold justify-center">Material Tailwind React</h1>
      </div>
      <ul class="mt-4">
        <h2 class="text-gray-800 text-lg font-semibold">Dashboard</h2>
        <li><nuxt-link to="/dashboard/home" class="block p-4 hover:bg-gray-200">Home</nuxt-link></li>
        <li><nuxt-link to="/dashboard/Profile" class="block p-4 hover:bg-gray-200">Profile</nuxt-link></li>
        <li><nuxt-link to="/dashboard/tables" class="block p-4 hover:bg-gray-200">Tables</nuxt-link></li>
        <li><nuxt-link to="/dashboard/notifications" class="block p-4 hover:bg-gray-200">Notifications</nuxt-link></li>
        <h3 class="font-bold justify-center">Auth Pages</h3>
        <li><nuxt-link to="/dashboard/sign-in" class="block p-4 hover:bg-gray-200">Sign In</nuxt-link></li>
        <li><nuxt-link to="/dashboard/sign-up" class="block p-4 hover:bg-gray-200">Sign Up</nuxt-link></li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>