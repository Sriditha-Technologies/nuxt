<template>
    <div>
       <h1>Sign In</h1>
       <form>
        <P>Enter your email and password to sign in.</P>
        <label for="Your Email">Your Email</label>
        <input type="text" Placeholder="Your Email" required />
        <br />
        <label for="password">Password</label>
        <input type="password" Placeholder="password" required />
        <br />
        <input type="checkbox"> I agree the <u>Terms and conditions</u>
        <br />
        <button type="submit">Sign In</button>
       </form>
       <br />
        <input type="checkbox"> Subscribe me to newsletter Forgot password<br />
        <span class="fa fa-google">Sign in with google</span><br /> 
        <span class="fa fa-twitter">Sign in with twitter</span><br />  
       <nuxt-link to="/register">Not Register? Create Account</nuxt-link>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuth } from '../composables/useAuth.js';
  
  const { login } = useAuth();
  const username = ref('');
  const password = ref('');
  
  const handleLogin = () => {
    login(username.value, password.value);
    // Redirect to home page or dashboard
    window.location.href = '/';
  };
  </script>