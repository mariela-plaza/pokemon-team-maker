<template>
  <div class="container text-center">
    <div class="row">
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

export default {
  name: "PokemonTeam",
  components: { PokemonCard },
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
