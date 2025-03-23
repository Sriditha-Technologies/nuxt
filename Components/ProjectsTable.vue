<template>
    <div>
      <h2>Projects Table</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Members</th>
            <th>Budget</th>
            <th>Completion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.id">
            <td>{{ project.title }}</td>
            <td>{{ project.members.join(", ") }}</td>
            <td>{{ project.budget }}</td>
            <td>{{ project.completion }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { projects } from '@/data/data';
  
  const projectList = ref(projects);
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>