export const getAllPokemon = (state) => {
  return state.pokemonList;
};

export const getPokemonById = (state, pokemonId) => {
  return state.pokemonList.find((p) => p.id === pokemonId);
};

export const getSelectedPokemon = (state) => {
  return state.selectedPokemon;
};

export const getLastSelectedPokemon = (state) => {
  return state.lastSelectedPokemon;
};

export const pokemonGetters = {
  getAllPokemon,
  getPokemonById,
  getSelectedPokemon,
  getLastSelectedPokemon,
};
