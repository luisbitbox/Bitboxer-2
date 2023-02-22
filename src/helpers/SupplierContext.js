import { createContext, useState } from 'react'

export const SupplierContext = createContext();

export const SupplierProvider = ({ children }) => {
    const [globalSupplier, setglobalSupplier] = useState({});
  
    return (
      <SupplierContext.Provider value={{ globalSupplier, setglobalSupplier }}>
        {children}
      </SupplierContext.Provider>
    );
  };
