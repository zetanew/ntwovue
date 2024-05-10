<template>
  <div class="users grid grid-cols-3 gap-4">
    <UserCard v-for="user in users" :key="user.id" :user="user" @click.native="selectUserAndNavigate(user)" v-if="!loading" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { useUserStore } from '@/store/userStore'
import UserCard from '@/components/UserCard.vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

export default {
  components: {
    UserCard
  },
  setup() {
    const userStore = useUserStore()
    const router = useRouter()
    const users = computed(() => userStore.users)
    const loading = computed(() => userStore.loading)

    const selectUserAndNavigate = (user) => {
      userStore.selectUser(user)
      router.push({ name: 'Todo', params: { id: user.id } })
    }

    return {
      users,
      loading,
      selectUserAndNavigate
    }
  }
}
</script>