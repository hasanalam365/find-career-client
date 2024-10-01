import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./firebase.config";
import { createContext } from "react";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
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
