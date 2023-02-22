import React, { createContext, useState } from 'react'

export const PriceReductionContext = createContext();

export const PriceReductionProvider =({ children }) => {
    const [globalPriceReduction, setGlobalPriceReduction] = useState({});

    return (
        <PriceReductionContext.Provider value={{globalPriceReduction, setGlobalPriceReduction}}>
            {children}
        </PriceReductionContext.Provider>
    )
}
