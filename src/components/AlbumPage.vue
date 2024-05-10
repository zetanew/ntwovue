<template>
    <div>
      <a @click="goBack">Go Back</a>
      <h1>Album Page</h1>
      <p>User ID: {{ userId }}</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useUserStore } from '@/store/userStore'
  
  export default {
    setup() {
      const route = useRoute()
      const router = useRouter()
      const userStore = useUserStore()
      const userId = ref(null)
  
      onMounted(() => {
        userId.value = route.params.id
      })
  
      const goBack = () => {
        userStore.selectUser(null)
        router.push('/')
      }
  
      return {
        userId,
        goBack
      }
    }
  }
  </script>