<template>
    <div class="bg-white shadow-md px-4 py-3 flex justify-center items-center">
       <center>
        <div class="font-bold text-xl mt-5">
          <h1>Sign In</h1>
        </div><br />
        <div>
          <P>Enter your email and password to sign in.</P>
        </div><br />
        <div>
          <label for="Your Email">Your Email</label><br />
          <input type="text" class="form-control black w-full px-4 py-2 text-xl font-normal
            text-gray-700 bg-white bg-clip-padding border border-solid boredr-gray-300 founded transition
             ease-in-out m-o focus:text-gray-700 focus:bg-white focus:border-blue-600
              focus:outline-none"  placeholder="your@email" />
        </div><br />
        <div>
          <label for="password">Password</label><br />
          <input type="password" class="form-control black w-full px-4 py-2 text-xl font-normal
            text-gray-700 bg-white bg-clip-padding border border-solid boredr-gray-300 founded transition
             ease-in-out m-o focus:text-gray-700 focus:bg-white focus:border-blue-600
              focus:outline-none" placeholder="Password"/>
        </div><br />
        <div>
          <input type="checkbox"> I agree the <u>Terms and conditions</u>
        </div><br />
        <div>
          <button type="submit" class="form-control black w-full px-4 py-2 text-xl font-normal text-white
            text-white-700 bg-black bg-clip-padding border border-solid boredr-gray-300 founded transition
             ease-in-out m-o focus:text-white-700 focus:bg-black focus:border-blue-600
              focus:outline-none" >Sign In
          </button>
        </div>
       <br />
       <div>
        <input type="checkbox"> Subscribe me to newsletter Forgot password
       </div><br />
        <div class="bg-white shadow-md justify-center px-4 py-2">
          <icon name="logos:google-icon"></icon>Sign in with google
        </div><br />
        <div class="bg-white shadow-md justify-center px-4 py-2">
          <icon name="logos:twitter"></icon>Sign in with twitter 
        </div><br />
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