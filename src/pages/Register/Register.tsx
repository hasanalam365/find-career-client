import React from "react";

const Register = () => {
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, "password:", password);
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row h-screen">
      <div className="flex-1 relative bg-[#46B0E6]"></div>

      <div className="flex-1 flex items-center justify-center">
        <div>
          <h2 className="text-2xl font-bold">Register</h2>
          <form onSubmit={handleRegister}>
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
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
