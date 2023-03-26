export const getPokemon = (state) => {
  return state.filteredPokemon;
};

export const getSelectedPokemon = (state) => {
  return state.selectedPokemon;
};

export const getLastSelectedPokemon = (state) => {
  return state.lastSelectedPokemon;
};

export const pokemonGetters = {
  getPokemon,
  getSelectedPokemon,
  getLastSelectedPokemon,
};
