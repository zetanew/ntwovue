<template>
  <div class="flex-grow p-4">
    <router-view @user-selected="selectUser" />
  </div>
</template>

<script>
import { useUserStore } from '@/store/userStore'
export default {
  setup() {
    const userStore = useUserStore()
    userStore.fetchUsers()
    return {
      selectedUser: userStore.selectedUser,
      selectUser: userStore.selectUser,
      users: userStore.users 
    }
  }
}
</script>