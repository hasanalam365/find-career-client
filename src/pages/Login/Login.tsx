import React from "react";

const Login = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email);
    console.log(password);
  };

  return (
    <div className="flex h-screen">
      {/* Right side */}
      <div className="flex-1 relative bg-[#46B0E6]">
        {/* Animated webm */}
        <image className="absolute top-0 left-0 w-full h-full object-cover z-50">
          <source src="/login-img.png" type="png" />
        </image>
      </div>

      {/* Left side */}
      <div className="flex-1 flex items-center justify-center">
        {/* Add your login form here */}
        <div>
          <h2 className="text-2xl font-bold">Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="border mb-4 p-2 w-full"
              name="email"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="border mb-4 p-2 w-full"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
