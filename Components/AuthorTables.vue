<template>
    <div>
      <h2>Authors Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Department</th>
            <th>Start Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="author in authors" :key="author.id">
            <td>{{ author.name }}</td>
            <td>{{ author.email }}</td>
            <td>{{ author.position }}</td>
            <td>{{ author.department }}</td>
            <td>{{ author.startDate }}</td>
            <td><button @click="editAuthor(author.id)">Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { authors } from '@/data/data';
  
  const authorList = ref(authors);
  
  function editAuthor(id) {
    // Logic for editing the author
    alert(`Edit author with ID: ${id}`);
  }
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