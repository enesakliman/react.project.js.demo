import React, { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";

// Başlangıç state’i: LocalStorage’dan yükle, yoksa boş liste
const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || []
};

// Reducer fonksiyonu: işlem ekleme ve silme
function AppReducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(tx => tx.id !== action.payload)
      };
    default:
      return state;
  }
}

// Context oluştur
const GlobalContext = createContext(initialState);

// Provider bileşeni
export function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // transactions her değiştiğinde localStorage’a kaydet
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  // Action yaratıcıları
  const addTransaction = transaction => dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  const deleteTransaction = id => dispatch({ type: "DELETE_TRANSACTION", payload: id });

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      addTransaction,
      deleteTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// Hook ile context’e erişim kolaylığı
export function useGlobalState() {
  return useContext(GlobalContext);
}
