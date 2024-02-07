<template>
  <div>
    <div
      v-if="poke !== null"
      class="w-full font-mono text-slate-300 bg-slate-900 flex flex-col"
    >
      <span class="flex w-full justify-center">DEBUG</span>
      <span>Name : {{ poke.name.fr }}</span>
      <span>PokeId : {{ poke.pokedexId }}</span>
      <span>Generation : {{ poke.generation }}</span>
    </div>
    <MainDisplayScore />
    <div v-if="poke !== null">
      <MainDisplayPokemon :poke="poke" />
      <MainAnswer :answer="poke.name.fr" />
    </div>
    <div v-else>
      Loading...
    </div>

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
