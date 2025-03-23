<template>
    <div>
      <UserProfile />
      <MessagesList />
      <ProjectsList />
    </div>
  </template>
  
  <script setup>
  import UserProfile from '@/components/UserProfile.vue';
  import MessagesList from '@/components/MessagesList.vue';
  import ProjectsList from '@/components/ProjectsList.vue';
  </script>
  
  <style>
  div {
    padding: 20px;
  }
  </style>