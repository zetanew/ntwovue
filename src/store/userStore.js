import { defineStore } from 'pinia'
import { getAllUsers } from '@/api/Http'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    selectedUser: null,
    users: []
  }),
  actions: {
    selectUser(user) {
      this.selectedUser = user
    },
    async fetchUsers() {
      this.users = await getAllUsers()
    }
  }
})