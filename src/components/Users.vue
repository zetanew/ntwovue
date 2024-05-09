<template>
  <div class="users grid grid-cols-3 gap-4">
    <UserCard v-for="n in 10" :key="n" />
  </div>
</template>

  
  <script>
  import { useUserStore } from '@/store/userStore'
  import UserCard from '@/components/UserCard.vue'
  
  export default {
    components: {
      UserCard
    },
    setup() {
      const userStore = useUserStore()
      const users = userStore.users
  
      return {
        users
      }
    }
  }
  </script>
  
  <style scoped>
  /* Your CSS goes here */
  </style>