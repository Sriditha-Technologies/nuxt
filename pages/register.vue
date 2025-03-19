<!-- pages/register.vue -->
<template>
    <div class="container">
      <center><h1 class="font-bold">Join Us Today</h1>
      <form>
        <p>Enter your email and password to register</p>
        <div>
          <label for="Your Email">Your Email</label>
          <input type="text"  Placeholder="Your Email" required />
        </div>
        <div>
          <label for="password">Password</label>
        <input type="password" Placeholder="password" required />
        </div>
        <input type="checkbox"> I agree the <u>Terms and conditions</u><br />
        <button type="submit" class="inline-block px-7 px-3 bg-blue-600 text-white font-medium">Register Now</button>
      </form>
      <br />
        <icon name="logos:google-icon"></icon>Sign in with google<br />
        <icon name="logos:twitter"></icon>Sign in with twitter<br /> 
      <nuxt-link to="/login">Already have an account? Sign In</nuxt-link>
      </center>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuth } from '../composables/useAuth';
  
  const { register } = useAuth();
  const username = ref('');
  const password = ref('');
  
  const handleRegister = () => {
    register(username.value, password.value);
    // Redirect to login page
    window.location.href = '/login';
  };
  </script>