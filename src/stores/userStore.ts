import { defineStore } from 'pinia'

export interface User {
  id: string
  email: string
  name: string
  gender?: string
  age?: number | null
  country?: string
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
    isAuthenticated: (state): boolean => !!state.user,

    userName: (state): string => state.user?.name ?? '',
    userEmail: (state): string => state.user?.email ?? '',
  },
})
