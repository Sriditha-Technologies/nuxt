<template>
    <div class="projects-list">
      <h2>Projects</h2>
      <div v-for="project in projects" :key="project.id" class="project-item">
        <h3>{{ project.title }} ({{ project.style }})</h3>
        <p>{{ project.description }}</p>
        <p><strong>Members:</strong> {{ project.members.join(', ') }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { projects } from '@/data/userprofile.js';
  
  const projects = projects;
  </script>
  
  <style scoped>
  .projects-list {
    margin-bottom: 20px;
  }
  
  .project-item {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
  }
  </style>