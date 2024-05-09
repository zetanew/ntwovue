<template>
    <div>
      <h1>Users</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }}
          <router-link :to="`/todos/${user.id}`">View Todos</router-link>
          <router-link :to="`/albums/${user.id}`">View Albums</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { getAllUsers } from '../api/Http'
  
  export default {
    data() {
      return {
        users: []
      }
    },
    async created() {
      this.users = await getAllUsers()
    }
  }
  </script>