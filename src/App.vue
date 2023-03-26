<template>
  <top-bar></top-bar>
  <router-view />
</template>
<script>
import TopBar from "./ui/TopBar.vue";

export default {
  components: { TopBar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  scroll-behavior: smooth;
}
</style>
