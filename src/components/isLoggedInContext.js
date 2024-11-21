import React, { createContext, useState, useContext } from 'react';

// Create the context
const LoginContext = createContext();

// Create a provider component
export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to log in
  const logIn = () => setIsLoggedIn(true);
  console.log('111111');
  // Function to log out
  const logOut = () => setIsLoggedIn(false);
  console.log('0000000');
  return (
    <LoginContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </LoginContext.Provider>
    
  );
};

// Custom hook to use the LoginContext
export const useLogin = () => useContext(LoginContext);
