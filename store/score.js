import { defineStore } from 'pinia';

export const useScoreStore = defineStore({
  id: 'score',
  state: () => ({
    score: 0
  }),
  actions: {
    increment () {
      console.log(this.score)
      this.score++
      console.warn(this.score)
    },
    decrement () {
      this.score--
    }
  }
})
