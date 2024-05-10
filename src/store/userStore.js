import { defineStore } from 'pinia'
import { getAllUsers, getUserDetails } from '@/api/Http'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    selectedUser: null,
    users: [],
    loading: true,
    userDetails: null,
    error: null
  }),
  actions: {
    async selectUser(user) {
      try {
        this.selectedUser = user
      } catch (error) {
        this.error = error
        console.error('Error selecting user:', error)
      }
    },
    async fetchUsers() {
      try {
        console.log("before api call", this.loading)
        this.users = await getAllUsers()
        this.loading = false;
        console.log("after api call", this.loading)
      } catch (error) {
        this.error = error
        console.error('Error fetching users:', error)
      }
    },
    async fetchUserDetails(userId) {
      try {
        this.userDetails = await getUserDetails(userId)
      } catch (error) {
        this.error = error
        console.error('Error fetching user details:', error)
      }
    },
    clearUserDetails() {
      this.userDetails = null
    }
  }
})