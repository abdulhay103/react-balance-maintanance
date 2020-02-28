import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial State
const initialState = {
  transections: []
};

// Create Global Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransection(id) {
    dispatch({
      type: "DELETE_TRANSECTION",
      payload: id
    });
  }

  function addTransection(transection) {
    dispatch({
      type: "ADD_TRANSECTION",
      payload: transection
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transections: state.transections,
        deleteTransection,
        addTransection
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
