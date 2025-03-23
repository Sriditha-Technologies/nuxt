<template>
    <div class="bg-white shadow-md px-4 py-3 flex justify-center items-center">
       <center><h1 class="font-bold">Sign In</h1>
        <P>Enter your email and password to sign in.</P>
        <div>
          <label for="Your Email">Your Email</label><br />
          <input type="text" placeholder="Your Email" class="p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label for="password">Password</label><br />
          <input type="text" placeholder="Password" class="p-2 border border-gray-300 rounded" />
        </div>
        <input type="checkbox"> I agree the <u>Terms and conditions</u>
        <div>
          <button type="submit" class="inline-black px-7  bg-blue-600 text-white font-medium">Sign In</button>
        </div>
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