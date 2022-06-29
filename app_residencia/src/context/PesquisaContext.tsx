import React, {createContext, useContext, useState} from 'react';

export const PesquisaContext = createContext({});

export const PesquisaProvider = ({children}) => {
  const [pesquisaX, setPesquisaX] = useState<any>();

  function Buscar(categoria: any) {
    setPesquisaX(categoria);
  }
  return (
    <PesquisaContext.Provider
      value={{
        pesquisaX,
        Buscar,
      }}>
      {children}
    </PesquisaContext.Provider>
  );
};
export const usePesquisar= () =>{
    const pesquisar= useContext(PesquisaContext);
    return pesquisar;
}