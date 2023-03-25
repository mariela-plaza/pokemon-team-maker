<template>
  <div class="card" style="width: 18rem">
    <img :src="sprite" class="pokemon-img" :alt="name" />
    <div>
      <h5 class="pokemon-name">{{ formattedName }}</h5>
    </div>
  </div>
</template>

<script>
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
  },
  computed: {
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
  },
};
</script>

<style scoped>
.pokemon-img {
  width: 75%;
  align-self: center;
}
.pokemon-name {
  padding-bottom: 1rem;
}
</style>
