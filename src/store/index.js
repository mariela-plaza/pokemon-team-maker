import { createStore } from "vuex";
import { pokemonState } from "./state";
import { pokemonGetters } from "./getters";
import { pokemonMutations } from "./mutations";
import { pokemonActions } from "./actions";

export default createStore({
  state: pokemonState,
  getters: pokemonGetters,
  mutations: pokemonMutations,
  actions: pokemonActions,
});
