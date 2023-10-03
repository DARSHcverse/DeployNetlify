import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();


export function UserProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, toggleLogin }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to access the user context
export function useUser() {
  return useContext(UserContext);
}
