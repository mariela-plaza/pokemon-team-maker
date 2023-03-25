import { createRouter, createWebHashHistory } from "vue-router";
import PokemonListView from "../views/PokemonListView";

const routes = [
  {
    path: "/",
    redirect: "/pokemon-team",
  },
  {
    path: "/pokemon-team",
    name: "pokemon-team",
    component: PokemonListView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
