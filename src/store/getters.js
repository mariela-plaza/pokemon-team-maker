export const getPokemon = (state) => {
  return state.filteredPokemon;
};

export const getSelectedPokemon = (state) => {
  return state.selectedPokemon;
};

export const pokemonGetters = {
  getPokemon,
  getSelectedPokemon,
};
