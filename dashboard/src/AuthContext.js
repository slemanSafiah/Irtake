import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext();

export function AuthProvider(Props) {
  const [auth, setAuth] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (token) {
      setAuth(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, token, email }}>
      {Props.children}
    </AuthContext.Provider>
  );
}
