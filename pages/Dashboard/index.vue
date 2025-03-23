<!-- pages/index.vue -->
<template>
    <div>
      <h1>Welcome to My Nuxt App!</h1>
      <p v-if="!isAuthenticated">You are not Sign in. Please Sign in.</p>
      <p v-else>You are Sign in!</p>
    </div>
  </template>
  
  <script setup>
  import { useAuth } from '../composables/useAuth';
  
  const { isAuthenticated } = useAuth();
  </script>