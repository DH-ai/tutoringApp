import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() => {
    const storedTokens = {
      access_token: localStorage.getItem("access_tokens"),
      refresh_token: localStorage.getItem("refresh_tokens"),
    };
    return storedTokens ? JSON.parse(storedTokens) : null;
  });

  const saveTokens = (tokens) => {
    setAuthTokens(tokens);
    localStorage.setItem({
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token,
    });
  };

  const removeTokens = () => {
    setAuthTokens(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  return (
    <AuthContext.Provider value={{ authTokens, saveTokens, removeTokens }}>
      {children}
    </AuthContext.Provider>
  );
};
