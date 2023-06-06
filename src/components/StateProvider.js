// setup data layer
// push things in the baslket and move to to checkout
// keeps track of basket
import React, { createContext, useContext, useReducer } from "react"

// empty 
export const StateContext = createContext();

// build a context provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);