import React, { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";

// LocalStorage Initialization
const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
};

// Reducer function to manage state changes
function AppReducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (tx) => tx.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
// Create a context for global state
const GlobalContext = createContext(initialState);

export function GlobalStateProvider({ children }) {
  // Initialize state with useReducer and localStorage data
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem("transactions");
    return {
      transactions: localData ? JSON.parse(localData) : [],
    };
  });
  // Effect to update localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  // Action creators for adding and deleting transactions
  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  // This function adds a new transaction to the state
  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  // This function deletes a transaction by its ID
  const data = {
    transactions: state.transactions,
    addTransaction,
    deleteTransaction,
  };
  // This object contains the state and action creators to be provided to components
  useEffect(() => {
    localStorage.getItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}
// This component provides the global state to its children components
GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
// This hook allows components to access the global state
export function useGlobalState() {
  return useContext(GlobalContext);
}
