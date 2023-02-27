import { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [globalUser, setGlobalUser] = useState({});
  
    return (
      <UserContext.Provider value={{ globalUser, setGlobalUser }}>
        {children}
      </UserContext.Provider>
    );
  };