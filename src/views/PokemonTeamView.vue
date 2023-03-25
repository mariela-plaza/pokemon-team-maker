<template>
  <div class="my-team">
    <ul v-for="pokemon in pokemonList" :key="pokemon.id">
      <li>{{ pokemon.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PokemonTeam",
  computed: {
    ...mapGetters({ pokemonList: "getAllPokemon" }),
  },
  methods: {
    ...mapActions(["fetchPokemonList"]),
  },
  mounted() {
    this.fetchPokemonList();
  },
};
</script>
