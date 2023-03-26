const SET_POKEMON_LIST = (state, payload) => {
  state.pokemonList = payload;
};

const SET_LAST_SELECTED_POKEMON = (state, payload) => {
  state.lastSelectedPokemon = payload;
};

const ADD_SELECTED_POKEMON = (state, newPokemon) => {
  if (state.selectedPokemon.length <= 5) {
    state.selectedPokemon.push(newPokemon);
  }
};

const REMOVE_SELECTED_POKEMON = (state, pokemonToRemove) => {
  state.selectedPokemon = state.selectedPokemon.filter(
    (p) => p.name !== pokemonToRemove.name
  );
};

export const pokemonMutations = {
  SET_POKEMON_LIST,
  ADD_SELECTED_POKEMON,
  REMOVE_SELECTED_POKEMON,
  SET_LAST_SELECTED_POKEMON,
};
