<template>
  <div class="container text-center">
    <div class="row pokemon-team-container">
      <pokemon-team></pokemon-team>
    </div>
    <div class="row pokemon-list-container">
      <ul
        class="col-12 col-sm-6 col-md-4 col-xl-3"
        v-for="pokemon in pokemonList"
        :key="pokemon.name"
      >
        <pokemon-card :name="pokemon.name" :url="pokemon.url"></pokemon-card>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PokemonCard from "@/components/PokemonCard.vue";
import PokemonTeam from "@/components/PokemonTeam.vue";

export default {
  name: "PokemonList",
  components: { PokemonCard, PokemonTeam },
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

<style scoped>
.pokemon-team-container {
  justify-content: center;
  margin-bottom: 1.5rem;
}
</style>
