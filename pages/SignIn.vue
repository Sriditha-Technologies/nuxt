<template>
    <div>
       <center><h1 class="font-bold">Sign In</h1>
       <form>
        <P>Enter your email and password to sign in.</P>
        <div>
          <label for="Your Email">Your Email</label>
          <input type="text" Placeholder="Your Email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" Placeholder="password" required />
        </div>
        <input type="checkbox"> I agree the <u>Terms and conditions</u>
        <br />
        <button type="submit" class="inline-block px-7 px-3 bg-blue-600 text-white font-medium">Sign In</button>
       </form>
       <br />
        <input type="checkbox"> Subscribe me to newsletter Forgot password<br />
        <icon name="logos:google-icon"></icon>Sign in with google<br />
        <icon name="logos:twitter"></icon>Sign in with twitter<br /> 
       <nuxt-link to="/register">Not Register? Create Account</nuxt-link>
       </center>
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