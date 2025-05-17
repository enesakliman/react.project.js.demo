import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
  transactions: [],
};

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
const GlobalState = createContext();

export function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const data = {
    transactions: state.transactions,
    addTransaction,
    deleteTransaction,
  };
  return (
    <GlobalState.Provider value={{ data }}>{children}</GlobalState.Provider>
  );
}

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useGlobalState() {
  return useContext(GlobalState);
}
