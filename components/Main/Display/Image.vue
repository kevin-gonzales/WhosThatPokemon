<template>
  <div>

    <img :src="pokeImage" alt="Sprite de Pokémon">
    
  </div>
</template>

<script>
export default {
    name: "MainDisplayImage",
    props: {
        pokeImage: {
            type: String,
            required: true
        }
    }
}

</script>

<style>

</style>