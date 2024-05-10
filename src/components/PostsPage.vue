<template>
  <div>
    <div @click="goBack" class="menu-item">
      <button class="flex items-center hover:border-l-4 hover:border-purple-500 hover:bg-purple-100 rounded p-2 transition-all duration-200 w-full">
        <img :src="BackIcon" alt="Go Back" />
      </button>
    </div>
    <div v-if="userDetails">
      <div v-if="posts">
        <h1 class="text-2xl font-bold mb-4">Posts</h1>
        
        <ul>
          <li v-for="post in posts" :key="post.id" class="p-2 my-2 rounded shadow">
            <h2 class="text-lg font-semibold text-purple-500">{{ post.title }}</h2>
            <p class="text-gray-600">{{ post.body }}</p>
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
      return userStore.userDetails ? userStore.userDetails.post : null
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