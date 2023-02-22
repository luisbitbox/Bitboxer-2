import { createContext, useState } from 'react'

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
    const [globalItem, setGlobalItem] = useState({});
  
    return (
      <ItemContext.Provider value={{ globalItem, setGlobalItem }}>
        {children}
      </ItemContext.Provider>
    );
  };
