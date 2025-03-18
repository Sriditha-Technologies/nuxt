<!-- pages/register.vue -->
<template>
    <div>
      <h1>Join Us Today</h1>
      <form>
        <p>Enter your email and password to register</p>
        <div>
          <label for="Your Email">Your Email</label>
          <input type="text" Placeholder="Your Email" required />
        </div>
        <div>
          <label for="password">Password</label>
        <input type="password" Placeholder="password" required />
        </div>
        <input type="checkbox"> I agree the <u>Terms and conditions</u><br />
        <button type="submit">Register Now</button>
      </form>
      <br />
        <span class="fa fa-google">Sign in with google</span><br />
        <span class="fa fa-twitter">Sign in with twitter</span><br /> 
      <nuxt-link to="/login">Already have an account? Sign In</nuxt-link>
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