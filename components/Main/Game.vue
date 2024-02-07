<template>
  <div>
    {{ poke }}

    <MainDisplayPokemon v-if="poke !== null" :poke='poke' />
    <MainAnswer :answer="poke && poke.name ? poke.name.fr : 'wait'"/>
  </div>
</template>

<script>
export default {
  name: "MainGame",
  data() {
    return {
      poke: null,
      generation: 1,
      apiBase: null,
    };
  },

  methods: {
    async fetchPokemon(pokeId) {
      try {
        const response = await fetch(`${this.apiBase}/pokemon/${pokeId}`);
        if (response.ok) {
          this.poke = await response.json();
          // console.log(this.poke);
        } else {
          throw new Error("Erreur fetch API");
        }
      } catch (error) {
        console.error(error);
      }
    },

    getPokeId(generation) {
      return generation == 1 ? Math.floor(Math.random() * 151) + 1 : 250; // **TEMP** Dans l'attente d'un choix possible des différentes générations
    },
  },

  mounted() {
    this.apiBase = useRuntimeConfig().public.apiBase;
    let pokeId = this.getPokeId(this.generation);
    this.fetchPokemon(pokeId);
  },
};
</script>

<style scoped>
</style>
