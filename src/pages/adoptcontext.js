// AdoptContext.js
import React, { createContext, useState, useContext } from 'react';

const AdoptContext = createContext();

export const AdoptProvider = ({ children }) => {
  const [adoptArray, setAdoptArray] = useState([]);

  return (
    <AdoptContext.Provider value={{ adoptArray, setAdoptArray }}>
      {children}
    </AdoptContext.Provider>
  );
};

export const useAdoptContext = () => useContext(AdoptContext);
