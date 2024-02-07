import { defineStore } from 'pinia'

export const useRoundStore = defineStore({
  id: 'round',
  state: () => ({
    round: 0
  }),
  actions: {
    increment() {
        this.round++
    }
  }
})
