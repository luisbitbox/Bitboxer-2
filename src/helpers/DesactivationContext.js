import { createContext, useState } from 'react'

export const DesactivationContext = createContext();

export const DesactivationProvider = ({ children }) => {
    const [globalAction, setGlobalAction] = useState({active: false});
  
    return (
      <DesactivationContext.Provider value={{ globalAction, setGlobalAction }}>
        {children}
      </DesactivationContext.Provider>
    );
  };