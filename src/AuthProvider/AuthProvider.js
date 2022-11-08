import React, { createContext } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const authInfo = { name: "sabbir" };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
