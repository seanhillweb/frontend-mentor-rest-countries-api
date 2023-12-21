"use client";

import React, { createContext, useReducer, useContext } from "react";
import { ACTIONS, AppReducer } from "@/context/app-context-reducer";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const initialState = {
    allCountries: [],
    filteredCountries: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const searchCountries = (value) => {
    dispatch({ type: ACTIONS.SEARCH_COUNTRIES, payload: value });
  };

  const filterCountries = (value) => {
    dispatch({ type: ACTIONS.FILTER_COUNTRIES, payload: value });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        searchCountries,
        filterCountries,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
