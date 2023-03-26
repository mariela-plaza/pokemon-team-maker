<template>
  <div class="pokemon-team">
    <div class="row pokemon-team-container" v-if="selectedPokemon.length > 0">
      <div
        v-for="pokemon in selectedPokemon"
        :key="pokemon.name"
        class="col-12 col-sm-6 col-md-4"
      >
        <pokemon-card
          :name="pokemon.name"
          :url="pokemon.url"
          parent="team"
        ></pokemon-card>
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
  width: 54rem;
  border: 1px solid #e1dbdb;
  border-radius: 10px;
  padding: 1.5rem;
}

.pokemon-team-container {
  row-gap: 0.75rem;
}

@media (max-width: 575px) {
  .pokemon-team {
    width: 25rem;
  }
}
</style>
