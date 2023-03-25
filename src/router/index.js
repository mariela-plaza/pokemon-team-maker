import { createRouter, createWebHashHistory } from "vue-router";
import PokemonTeamView from "../views/PokemonTeamView";

const routes = [
  {
    path: "/pokemon-team",
    name: "pokemon-team",
    component: PokemonTeamView,
  },
  {
    path: "/",
    redirect: "/pokemon-team",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
