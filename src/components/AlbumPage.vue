<template>
    <div>
      <h1>Album Page</h1>
      <p>User ID: {{ userId }}</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  export default {
    setup() {
      const route = useRoute()
      const userId = ref(null)
  
      onMounted(() => {
        userId.value = route.params.id
      })
  
      return {
        userId
      }
    }
  }
  </script>