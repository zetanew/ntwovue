import { defineStore } from 'pinia'
import { getAllUsers } from '@/api/Http'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    selectedUser: null,
    users: [],
    loading: true
  }),
  actions: {
    selectUser(user) {
      this.selectedUser = user
    },
    async fetchUsers() {
      console.log("before api call" ,this.loading)
      this.users = await getAllUsers()
      this.loading = false;
      console.log("after api call" ,this.loading)
    }
  }
})