<template>
    <div class="user-profile">
      <h2>Profile Information</h2>
      <div>
        <p><strong>First Name:</strong> {{ profile.name }}</p>
        <p><strong>Mobile:</strong> {{ profile.mobile }}</p>
        <p><strong>Email:</strong> {{ profile.email }}</p>
        <p><strong>Location:</strong> {{ profile.location }}</p>
        <p><strong>About:</strong> {{ profile.about }}</p>
        <div>
          <strong>Social:</strong>
          <ul>
            <li v-for="(link, platform) in profile.social" :key="platform">
              <a :href="link" target="_blank">{{ platform }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { userProfile } from '@/data/userprofile.js';
  
  const profile = userProfile;
  </script>
  
  <style scoped>
  .user-profile {
    margin-bottom: 20px;
  }
  </style>