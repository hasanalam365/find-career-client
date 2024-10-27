import React, { createContext, ReactNode, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

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
  //SignUp
  const signUpUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //goole login
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const allValues = {
    signUpUser,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
