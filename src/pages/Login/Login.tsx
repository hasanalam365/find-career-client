import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { UserCredential } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login: React.FC = () => {
  const { signUpUser } = useAuth();
  const [isOpenPassword, setIsOpenPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result: UserCredential = await signUpUser(email, password);
      console.log(result.user);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  console.log(isOpenPassword);

  return (
    <div className="flex flex-col md:flex-row lg:flex-row h-screen">
      <div className="flex-1 relative bg-[#46B0E6]"></div>

      <div className="flex-1 flex items-center justify-center">
        <div>
          <h2 className="text-2xl font-bold">Login to Your Account</h2>
          <p>Welcome back! Select the below login methods</p>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter Email"
              className="border mb-4 p-2 w-full"
              name="email"
            />
            <div className=" w-full relative">
              <input
                name="password"
                type={`${isOpenPassword ? "text" : "password"}`}
                placeholder="Enter Password"
                className="border mb-4 p-2 w-full "
              />
              {isOpenPassword ? (
                <FaEye
                  className="text-xl absolute top-3 right-3"
                  onClick={() => setIsOpenPassword(false)}
                />
              ) : (
                <FaEyeSlash
                  className="text-xl absolute top-3 right-3"
                  onClick={() => setIsOpenPassword(true)}
                />
              )}
            </div>

            <div className="flex flex-col -mt-3">
              <a href="#">Forgot Password</a>

              <button
                type="submit"
                className="bg-[#6300B3] text-white py-2 px-4 rounded mt-5">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
