import React, { createContext, useContext, useState} from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [scrollPos, setScrollPos] = useState(0);
    
  return (
    <StateContext.Provider
      value={{
        scrollPos: scrollPos,
        setScrollPos: setScrollPos
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
