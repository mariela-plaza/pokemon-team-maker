import axios from "axios";

const fetchPokemonList = async ({ commit }) => {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );
  const pokemon = data.results;
  commit("SET_POKEMON_LIST", pokemon);
};

const setSelectedPokemon = async ({ commit }, selectedPokemon) => {
  commit("SET_LAST_SELECTED_POKEMON", selectedPokemon);
};

const selectPokemon = ({ commit }, newPokemon) => {
  commit("ADD_SELECTED_POKEMON", newPokemon);
};

const deselectPokemon = ({ commit }, pokemonToRemove) => {
  commit("REMOVE_SELECTED_POKEMON", pokemonToRemove);
};

export const pokemonActions = {
  fetchPokemonList,
  selectPokemon,
  deselectPokemon,
  setSelectedPokemon,
};
