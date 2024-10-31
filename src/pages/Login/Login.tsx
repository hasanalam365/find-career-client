import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { UserCredential } from "firebase/auth";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { signUpUser, googleSignIn } = useAuth();
  const [isOpenPassword, setIsOpenPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error);
      });
  };

  return (
    <div className="  m-8 flex flex-col w-[90%] md:w-3/4 lg:w-1/2 mx-auto">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Login to Your Account</h2>
        <p>Welcome back! Select the below login methods</p>
      </div>
      <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center  gap-5 bg-white shadow-xl rounded-3xl p-8 ">
        <div className="w-full md:w-3/4 lg:w-1/2">
          <form onSubmit={handleLogin}>
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="border mb-4 p-2 w-full"
              name="email"
            />
            <div className=" w-full relative">
              <label htmlFor="">Password</label>
              <input
                name="password"
                type={`${isOpenPassword ? "text" : "password"}`}
                placeholder="Enter Password"
                className="border mb-4 p-2 w-full "
              />
              {isOpenPassword ? (
                <FaEye
                  className="text-xl absolute top-9 right-3"
                  onClick={() => setIsOpenPassword(false)}
                />
              ) : (
                <FaEyeSlash
                  className="text-xl absolute top-9 right-3"
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
          <div className="divider">or login with</div>
          <div className="py-4 flex items-center justify-center gap-5">
            <FcGoogle onClick={handleGoogleLogin} className="text-4xl" />
            <FaFacebook className="text-3xl text-blue-700" />
          </div>
          <div className="flex items-center gap-1 justify-center mb-5">
            <p>Don't have an Account?</p>
            <Link to={"/register"} className="underline text-blue-600">
              Register
            </Link>
          </div>
        </div>
        <div>
          <img src="/login.png" alt="" className="w-[370px] h-[310px]" />
        </div>
      </div>
    </div>
  );
};

export default Login;
