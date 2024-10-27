import React from "react";
import useAuth from "../../hooks/useAuth";
import { UserCredential } from "firebase/auth"; // Import Firebase's user type

const Login: React.FC = () => {
  const { signUpUser } = useAuth(); // Ensure signUpUser is non-null

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result: UserCredential = await signUpUser(email, password);
      console.log(result.user); // result.user is properly typed
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

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
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              className="border mb-4 p-2 w-full"
            />

            <div className="flex flex-col -mt-3">
              <a href="#">Forgot Password</a>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded mt-5">
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
