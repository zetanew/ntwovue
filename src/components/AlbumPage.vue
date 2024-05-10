<template>
  <div>
    <div @click="goBack" class="menu-item">
      <button class="flex items-center hover:border-l-4 hover:border-purple-500 hover:bg-purple-100 rounded p-2 transition-all duration-200 w-full">
        <img :src="BackIcon" alt="Go Back" />
      </button>
    </div>
    <div v-if="userDetails">
      <div v-if="albums">
        <h1 class="text-2xl font-bold mb-4">Albums</h1>
        // list albums 



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
      //userStore.selectUser(null)
      router.push('/')
    }

    const albums = computed(() => {
      return userStore.userDetails ? userStore.userDetails.album : null
    })

    return {
      userId,
      goBack,
      BackIcon,
      userDetails: userStore.userDetails,
      albums
    }
  }
}
</script>