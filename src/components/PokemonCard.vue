<template>
  <div
    class="card"
    :class="{ 'lg-card': parent === 'list', 'md-card': parent === 'team' }"
  >
    <img :src="sprite" class="pokemon-img" :alt="name" />
    <div class="card-body">
      <h5 class="pokemon-name">{{ formattedName }}</h5>
      <button
        v-if="parent === 'list'"
        class="btn"
        :class="{ 'btn-danger': isSelected, 'btn-primary': !isSelected }"
        @click="updateSelectedPokemon"
      >
        {{ actionText }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    parent: {
      type: String,
      default: "list",
    },
  },
  computed: {
    ...mapGetters({ selectedPokemon: "getSelectedPokemon" }),
    isSelected() {
      return this.selectedPokemon.find((p) => p.name === this.name);
    },
    formattedName() {
      return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    },
    entryNumber() {
      const separatedString = this.url.split("/");
      return separatedString[separatedString.length - 2];
    },
    sprite() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.entryNumber}.png`;
    },
    actionText() {
      return this.isSelected ? "Remove from party" : "Add to party";
    },
  },
  methods: {
    ...mapActions(["selectPokemon", "deselectPokemon"]),
    updateSelectedPokemon() {
      const pokemon = {
        name: this.name,
        url: this.url,
      };

      if (!this.isSelected) {
        this.selectPokemon(pokemon);
        return;
      }
      this.deselectPokemon(pokemon);
    },
  },
};
</script>

<style scoped>
.lg-card {
  max-width: 18rem;
}

.md-card {
  max-width: 8rem;
}

.card-body {
  padding: 1rem;
}
.pokemon-img {
  width: 75%;
  align-self: center;
}
.pokemon-name {
  padding-bottom: 1rem;
}
</style>
