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
          <li><router-link :to="`/todos/${selectedUser.id}`">Todos</router-link></li>
          <li><router-link :to="`/posts/${selectedUser.id}`">Posts</router-link></li>
          <li><router-link :to="`/albums/${selectedUser.id}`">Albums</router-link></li>
        </ul>
      </div>
      <div v-else>
        <!-- Default Menu Item -->
        <h2>Users</h2>
      </div>
    </div>
    <!-- Main Content -->
    <div class="flex-grow p-4">
      <router-view @user-selected="selectUser" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { getAllUsers } from '@/api/Http'
import { useUserStore } from '@/store/userStore'

const userStore = useUserStore()

onMounted(async () => {
  const users = await getAllUsers() // Fetch users from API
  localStorage.setItem('users', JSON.stringify(users)) // Save users to local storage
})

const selectUser = (user) => {
  userStore.selectUser(user)
}

const selectedUser = userStore.selectedUser
</script>