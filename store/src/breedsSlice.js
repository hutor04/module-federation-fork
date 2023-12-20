import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {
    addBreed: (state, action) => {
      if (!state.data.includes(action.payload)) {
        state.data.push(action.payload);
      }
    },
    emptyBreeds: (state) => {
      state.data = [];
    },
  },
});

export const { addBreed, emptyBreeds } = breedsSlice.actions;

export default breedsSlice.reducer;
