<template>
  <form>
    <input
      v-model="filter"
      @input="filterList"
      placeholder=" type a pokemon name to filter the list below "
      size="42"
    />
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      filter: "",
    };
  },
  methods: {
    ...mapActions(["filterPokemonList"]),
    filterList() {
      this.filterPokemonList(this.filter);
    },
  },
};
</script>

<style></style>
