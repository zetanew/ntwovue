<template>
  <div class="flex h-screen bg-gray-200">
    <!-- Sidebar / Menu -->
    <div class="bg-white w-64 flex flex-col p-4">
      <div v-if="selectedUser">
        <!-- User Card -->
        <UserCardTop :user="selectedUser" />
        <!-- Menu Items -->
        <div @click="navigateToHome" class="menu-item">
          <button class="flex items-center hover:border-l-4 hover:border-purple-500 hover:bg-purple-100 rounded p-2 transition-all duration-200 w-full">
            <img :src="UserIcon" alt="User Icon" />
            <span class="ml-2">Users</span>
          </button>
        </div>
        <div @click="navigateToTodo" class="menu-item">
          <button class="flex items-center hover:border-l-4 hover:border-purple-500 hover:bg-purple-100 rounded p-2 transition-all duration-200 w-full">
            <img :src="TodoIcon" alt="Todo Icon" />  
            <span class="ml-2">Todos</span>
          </button>
        </div>
        <div @click="navigateToPosts" class="menu-item">
          <button class="flex items-center hover:border-l-4 hover:border-purple-500 hover:bg-purple-100 rounded p-2 transition-all duration-200 w-full">
            <img :src="PostsIcon" alt="Posts Icon" />  
            <span class="ml-2">Posts</span>
          </button>
        </div>
        <div @click="navigateToAlbums" class="menu-item">
          <button class="flex items-center hover:border-l-4 hover:border-purple-500 hover:bg-purple-100 rounded p-2 transition-all duration-200 w-full">
            <img :src="AlbumsIcon" alt="Albums Icon" />  
            <span class="ml-2">Albums</span>
          </button>
        </div>
      </div>
      <div v-else>
        <!-- Default Menu Item -->
        <div class="menu-item" @click="navigateToHome">
          <button class="flex items-center hover:border-l-4 hover:border-purple-500 hover:bg-purple-100 rounded p-2 transition-all duration-200 w-full">
            <img :src="UserIcon" alt="User Icon" />
            <span class="ml-2">Users</span>
          </button>
        </div>
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
import UserCardTop from '@/components/UserCardTop.vue'
import UserIcon from '@/assets/icons/userIcon.png'
import TodoIcon from '@/assets/icons/todo.png'
import PostsIcon from '@/assets/icons/post.png'
import AlbumsIcon from '@/assets/icons/album.png'

const userStore = useUserStore()
const router = useRouter()

onMounted(async () => {
  const users = await getAllUsers() // Fetch users from API
  localStorage.setItem('users', JSON.stringify(users)) // Save users to local storage
})

const selectUser = async (user) => {
  userStore.selectUser(user)
  await userStore.fetchUserDetails(user.id)
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

const navigateToHome = () => {
  userStore.selectUser(null)
  userStore.clearUserDetails(null)
  router.push({ name: 'Users' })
}
</script>