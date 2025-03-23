<template>
    <div>
      <AuthorsTable />
      <ProjectsTable />
    </div>
  </template>
  
  <script setup>
  import AuthorsTable from '@/components/AuthorsTable.vue';
  import ProjectsTable from '@/components/ProjectsTable.vue';
  </script>
  
  <style>
  div {
    padding: 20px;
  }
  
  h2 {
    margin-top: 20px;
  }
  </style>
  