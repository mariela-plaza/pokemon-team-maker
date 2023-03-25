import { createRouter, createWebHashHistory } from "vue-router";
import PokemonTeamView from "../views/PokemonTeamView";

const routes = [
  {
    path: "/",
    redirect: "/pokemon-team",
  },
  {
    path: "/pokemon-team",
    name: "pokemon-team",
    component: PokemonTeamView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
