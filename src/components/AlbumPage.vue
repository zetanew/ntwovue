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
        <div class="grid grid-cols-4 gap-4">
          <div v-for="album in albums" :key="album.id" class="rounded overflow-hidden shadow-lg transform transition-all duration-200 hover:scale-110">
            <img :src="`https://picsum.photos/200/200?random=${album.id}`" alt="Album cover" class="w-full object-cover">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ album.title }}</div>
            </div>
          </div>
        </div>
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