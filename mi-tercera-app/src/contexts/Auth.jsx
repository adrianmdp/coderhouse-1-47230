import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const login = (user, pass) => {
    // Aca llamamos a la api, validamos los datos y definimos al usuario en sesión
    console.log(user, pass);
    setUser({ name: "Adrián", user, id: "asd123asd" });
  };

  const register = (data) => {};

  const logout = () => {};

  const recoveryPassword = () => {};

  const loginWithToken = () => {};

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        recoveryPassword,
        loginWithToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
