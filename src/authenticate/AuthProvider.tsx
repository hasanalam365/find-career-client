import React, { createContext, ReactNode, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import app from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

// Define the shape of AuthContext
interface AuthContextType {
  signInUser: (email: string, password: string) => Promise<any>;
  signUpUser: (email: string, password: string) => Promise<any>;
  googleSignIn: () => Promise<any>;
  signOutUser: () => Promise<void>;
  user: User | null;
  loading: boolean;
}

// Create the context with an initial value of an empty object
export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  //SignUp
  const signUpUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in
  const signInUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //goole login
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //sign Out User
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth).then(() => setUser(null));
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser || undefined);
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const allValues = {
    signInUser,
    signUpUser,
    googleSignIn,
    user,
    loading,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
