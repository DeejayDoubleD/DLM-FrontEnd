import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {
  state: () => ({
    username: null,
    password: null,
    token: null,
  }),

  actions: {
    setUserData(username, password, token) {
      this.username = username
      this.password = password
      this.token = token
    },
  },
})
