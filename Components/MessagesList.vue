<template>
    <div class="messages-list">
      <h2>Messages</h2>
      <ul>
        <li v-for="message in messages" :key="message.id">
          <strong>{{ message.sender }}:</strong> {{ message.text }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { messages } from '@/data/userprofile.js';
  
  const messages = messages;
  </script>
  
  <style scoped>
  .messages-list {
    margin-bottom: 20px;
  }
  </style>