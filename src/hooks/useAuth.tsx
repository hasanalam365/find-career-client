import { useContext } from "react";
import { AuthContext } from "../authenticate/AuthProvider";

const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return authContext;
};

export default useAuth;
