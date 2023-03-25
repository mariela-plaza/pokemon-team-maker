const SET_POKEMON_LIST = (state, payload) => {
  state.pokemonList = payload;
};

const ADD_SELECTED_POKEMON = (state, newPokemon) => {
  if (state.selectedPokemon.length <= 5) {
    state.selectedPokemon.push(newPokemon);
  }
};

const REMOVE_SELECTED_POKEMON = (state, pokemonToRemove) => {
  state.selectedPokemon.filter((p) => p.id !== pokemonToRemove.id);
};

export const pokemonMutations = {
  SET_POKEMON_LIST,
  ADD_SELECTED_POKEMON,
  REMOVE_SELECTED_POKEMON,
};
