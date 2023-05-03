import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pokemonItems: [],
  loading: false,
  error: null,
  selectPokes: {},
};

export const getInitialPokemonData = createAsyncThunk(
  "pokemon/getInitialPokemonData", async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const otherPages = createAsyncThunk(
  "pokemon/otherPages", async (url) => {
    const response = await axios.get(url)
    return response.data;
  }
);

export const getPokemonByName = createAsyncThunk(
  "pokemon/getPokemonByName", async (name) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      return response.data;
    } catch(err) {
      alert('Pokemon não encontrado');
      return response.data;
    };
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getInitialPokemonData.pending, (state) => {
      state.loading = true
    });
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.loading = false
      state.pokemonItems = action.payload
      state.error = ''
    });

    builder.addCase(otherPages.pending, (state) => {
      state.loading = true
    });
    builder.addCase(otherPages.fulfilled, (state, action) => {
      state.loading = false
      state.pokemonItems = action.payload
      state.error = ''
    });

    builder.addCase(getPokemonByName.fulfilled, (state, action) => {
      state.loading = false;
      state.selectPokes = action.payload
    });
  },
});

export default pokemonSlice.reducer;