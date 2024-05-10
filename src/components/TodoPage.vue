<template>
  <div>
    <div @click="goBack" class="menu-item">
      <button class="flex items-center hover:border-l-4 hover:border-purple-500 hover:bg-purple-100 rounded p-2 transition-all duration-200 w-full">
        <img :src="BackIcon" alt="Go Back" />
      </button>
    </div>
    <div v-if="userDetails">
      <div v-if="todos">
        <h1 class="text-2xl font-bold mb-4">Todos</h1>
        <ul>
          <li v-for="todo in todos" :key="todo.id" class="p-2 my-2 rounded shadow flex items-center">
            <input type="checkbox" v-model="todo.completed" :class="todo.completed ? 'bg-purple-500' : 'bg-gray-500'" class="form-checkbox h-5 w-5 text-gray-600">
            <p class="ml-2 text-black">{{ todo.title }}</p>
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

    const todos = computed(() => {
      return userStore.userDetails ? userStore.userDetails.todos : null
    })

    return {
      userId,
      goBack,
      BackIcon,
      userDetails: userStore.userDetails,
      todos
    }
  }
}
</script>