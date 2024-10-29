import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, "password:", password);
  };

  return (
    <div className="p-4 md:p-8 md:w-[90%] lg:p-8 lg:w-3/4 mx-auto">
      <div className="mb-5">
        <h2 className="text-2xl font-bold mb-2">Registration</h2>
        <p className="md:w-3/4">
          Join us to explore top job opportunities or find the perfect
          candidates. Let’s connect talent with opportunity!
        </p>
      </div>
      <div className="p-6 shadow-xl rounded-3xl">
        <form
          onSubmit={handleRegister}
          className=" md:grid lg:grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <div className="md:mr-5">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter Name"
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              className="border p-2 w-full"
            />
          </div>
          <div className="md:mr-5">
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              type="text"
              placeholder="Enter Phone"
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="education">Education</label>
            <select name="education" className="border p-2 w-full">
              <option disabled selected>
                Pick one
              </option>
              <option>Under SSC</option>
              <option>SSC/Dakhil</option>
              <option>HSC/Alim</option>
              <option>Graduated/Degree</option>
              <option>Others</option>
            </select>
          </div>
          <div className="md:mr-5">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Enter Confirm Password"
              className="border p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-[#6300B3] text-white py-2 px-4 rounded mt-5 col-span-2">
            Register
          </button>
        </form>

        <div className="flex items-center gap-1 justify-center mt-5">
          <p>Already have an account?</p>
          <Link to="/login" className="underline text-blue-600">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
