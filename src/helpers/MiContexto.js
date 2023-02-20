import { createContext } from 'react'

export const MiContexto = createContext({
    valor: true,
    actualizarValor: () => {},
});
