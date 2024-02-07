import { defineStore } from 'pinia';

export const useScoreStore = defineStore({
  id: 'score',
  state: () => ({
    score: 0
  }),
  actions: {
    increment () {
      this.score++
    },
    decrement () {
      this.score--
    }
  }
})
