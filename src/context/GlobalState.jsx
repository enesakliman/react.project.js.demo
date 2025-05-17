import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const GlobalState = createContext();

export function GlobalStateProvider({ children }) {
  const data = {};
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
