<template>
  <div class="flex h-screen bg-gray-200">
    <!-- Sidebar / Menu -->
    <div class="bg-white w-64 flex flex-col p-4">
      <div v-if="selectedUser">
        <!-- User Card -->
        <div class="mb-4">
          <h2>{{ selectedUser.name }}</h2>
          <!-- Other user details -->
        </div>
        <!-- Menu Items -->
        <ul>
          <li @click="navigateToTodo">Todos</li>
          <li @click="navigateToPosts">Posts</li>
          <li @click="navigateToAlbums">Albums</li>
        </ul>
      </div>
      <div v-else>
        <!-- Default Menu Item -->
        <h2>Users Icon</h2>
      </div>
    </div>
    <!-- Main Content -->
    <div class="flex-grow p-4">
      <router-view @user-selected="selectUser" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getAllUsers } from '@/api/Http'
import { useUserStore } from '@/store/userStore'

const userStore = useUserStore()
const router = useRouter()

onMounted(async () => {
  const users = await getAllUsers() // Fetch users from API
  localStorage.setItem('users', JSON.stringify(users)) // Save users to local storage
})

const selectUser = (user) => {
  userStore.selectUser(user)
}

const selectedUser = computed(() => userStore.selectedUser)

const navigateToTodo = () => {
  if (selectedUser.value) {
    router.push({ name: 'Todo', params: { id: selectedUser.value.id } })
  }
}

const navigateToPosts = () => {
  if (selectedUser.value) {
    router.push({ name: 'Posts', params: { id: selectedUser.value.id } })
  }
}

const navigateToAlbums = () => {
  if (selectedUser.value) {
    router.push({ name: 'Albums', params: { id: selectedUser.value.id } })
  }
}
</script>