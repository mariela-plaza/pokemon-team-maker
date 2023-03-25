<template>
  <div class="pokemon-team">
    <div v-if="selectedPokemon.length > 0">
      <div v-for="pokemon in selectedPokemon" :key="pokemon.name">
        <pokemon-card parent="team"></pokemon-card>
      </div>
    </div>
    <div v-else>
      <p>There are no pokemon in your party yet, try to add some!</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PokemonCard from "./PokemonCard.vue";

export default {
  name: "PokemonTeam",
  components: { PokemonCard },
  computed: {
    ...mapGetters({ selectedPokemon: "getSelectedPokemon" }),
  },
};
</script>

<style scoped>
.pokemon-team {
  width: 40rem;
  border: 1px solid #e1dbdb;
  border-radius: 10px;
}
</style>
