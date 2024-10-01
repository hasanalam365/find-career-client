import { useContext } from "react";
import { AuthContext } from "../authenticate/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);

  return auth;
};

export default useAuth;
