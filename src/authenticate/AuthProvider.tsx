import React, { createContext, ReactNode, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./firebase.config";

const auth = getAuth(app);

// Define the shape of AuthContext
interface AuthContextType {
  signUpUser: (email: string, password: string) => Promise<any>;
}

// Create the context with an initial value of an empty object
export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const signUpUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const allValues = {
    signUpUser,
  };

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
