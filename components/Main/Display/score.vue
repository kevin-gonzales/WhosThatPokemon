<template>
  <span class="text-4xl text-red-500"> {{ score }} </span>
</template>

<script>
import { useScoreStore } from "@/store/score.js";

export default {
  name: "MainDisplayScore",
  setup() {
    const store = useScoreStore()
    const score = ref(store.score)

    watch(() => store.score, (newValue) => {
    score.value = newValue
  })

    return {
        score
    }
  },
};
</script>

<style>
</style>