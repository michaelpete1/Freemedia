import { defineStore } from 'pinia'

export interface User {
  id: string
  email: string
  name: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    token: '',
  }),
  actions: {
    login(user: User, token: string) {
      this.user = user
      this.token = token
    },
    logout() {
      this.user = null
      this.token = ''
    },
  },
  getters: {
    isAuthenticated: (state) => {
      return !!state.user // Returns true if user is not null
    },
  },
})
