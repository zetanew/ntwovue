<template>
  <div>
    <div @click="goBack" class="menu-item">
      <button class="flex items-center hover:border-l-4 hover:border-purple-500 hover:bg-purple-100 rounded p-2 transition-all duration-200 w-full">
        <img :src="BackIcon" alt="Go Back" />
      </button>
    </div>
    <h1>Posts Page</h1>
    <p>User ID: {{ userId }}</p>
    <div v-if="userDetails">
      <h2>User Details:</h2>
      <p>Name: {{ userDetails.name }}</p>
      <p>Email: {{ userDetails.email }}</p>
      <div v-if="posts">
        <h2>Posts:</h2>
        <ul>
          <li v-for="post in posts" :key="post.id" class="p-2 bg-gray-100 my-2 rounded shadow">
            <h3 class="text-purple-500">{{ post.title }}</h3>
            <p class="text-gray-500">{{ post.body.substring(0, 100) }}...</p>
            <a href="#" class="text-blue-500">See More</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/store/userStore'
import BackIcon from '@/assets/icons/back.png'
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const userStore = useUserStore()
    const userId = ref(null)

    onMounted(() => {
      userId.value = route.params.id
      userStore.fetchUserDetails(userId.value)
    })

    const goBack = () => {
      userStore.selectUser(null)
      router.push('/')
    }

    const posts = computed(() => {
      return userStore.userDetails ? userStore.userDetails.posts : null
    })

    return {
      userId,
      goBack,
      BackIcon,
      userDetails: userStore.userDetails,
      posts
    }
  }
}
</script>