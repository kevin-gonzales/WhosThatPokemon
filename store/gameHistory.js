import { defineStore } from 'pinia';

export const useGameHistoryStore = defineStore({
  id: 'game',
  state: () => ({
    gameHistory: []
  }),
  actions: {
    roundEnd (roundId, isWin, answer, pokeName) {
      const round = {roundId, isWin, answer, pokeName}
      this.gameHistory.push(round)
      return round
    }
  }
})
