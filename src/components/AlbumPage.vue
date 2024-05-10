<template>
  <div>
    <div @click="goBack" class="menu-item">
<button class="flex items-center hover:border-l-4 hover:border-purple-500 hover:bg-purple-100 rounded p-2 transition-all duration-200 w-full">
  <img :src="BackIcon" alt="Go Back" />
</button>
</div>
    <a @click="goBack">Go Back</a>
    <h1>Album Page</h1>
    <p>User ID: {{ userId }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
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
    })

    const goBack = () => {
      userStore.selectUser(null)
      router.push('/')
    }

    return {
      userId,
      goBack,
      BackIcon // Export BackIcon here
    }
  }
}
</script>