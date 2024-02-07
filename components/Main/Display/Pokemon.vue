<template>
  <div>
    <MainDisplayImage
      v-if="poke && poke.sprites && poke.sprites.regular"
      :pokeImage="poke.sprites.regular"
    />
    <span v-else>Wait</span>
  </div>
</template>

<script >
export default {
  name: "MainDisplayPokemon",
  props: {
    poke: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>