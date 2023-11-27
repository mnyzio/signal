import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [contextCount, setContextCount] = useState(0);
  const contextMessage = "I am context message";
  console.log("\x1b[33m%s\x1b[0m", "Context accessed");

  return (
    <AppContext.Provider
      value={{ contextCount, setContextCount, contextMessage }}
    >
      {children}
    </AppContext.Provider>
  );
};
