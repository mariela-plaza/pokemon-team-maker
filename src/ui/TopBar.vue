<template>
  <nav>
    <button class="btn btn-light" @click="toTop">To top</button>
    <button class="btn btn-light" @click="toLastSelectedPokemon">
      To last selected pokemon
    </button>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ selectedPokemon: "getSelectedPokemon" }),
  },
  methods: {
    toTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    toLastSelectedPokemon() {
      if (!this.selectedPokemon.length) return;

      const lastSelectedPokemon =
        this.selectedPokemon[this.selectedPokemon.length - 1];
      document
        .getElementById(`${lastSelectedPokemon.name}_list`)
        .scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  column-gap: 2rem;
  position: sticky;
  top: 0;
  background-color: #0a60d7;
  z-index: 1;
  padding: 1.5rem 0;
  margin-bottom: 1.5rem;
}
</style>
