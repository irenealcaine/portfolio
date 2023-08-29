import { createContext, useReducer } from "react";
import NeonOnReducer from "./neonOnReducer";

const INITIAL_STATE = {
  neonOn: false,
};

export const NeonOnContext = createContext(INITIAL_STATE);

export const NeonOnContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NeonOnReducer, INITIAL_STATE);

  return (
    <NeonOnContext.Provider value={{ neonOn: state.neonOn, dispatch }}>
      {children}
    </NeonOnContext.Provider>
  );
};
