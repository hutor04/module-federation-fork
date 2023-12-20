import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import breedsReducer, { addBreed, emptyBreeds } from "./breedsSlice";

const store = configureStore({
  reducer: {
    breeds: breedsReducer,
  },
});

export function useStore() {
  const breeds = useSelector((state) => state.breeds.data);
  const dispatch = useDispatch();
  return {
    breeds,
    addBreed: (breed) => dispatch(addBreed(breed)),
    emptyBreeds: () => dispatch(emptyBreeds()),
  };
}

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
