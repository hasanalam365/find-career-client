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
    <div className="p-8">
      <div className="w-3/4 mx-auto p-6 shadow-xl rounded-3xl">
        <div>
          <h2 className="text-2xl font-bold">Register</h2>
          <form
            onSubmit={handleRegister}
            className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 ">
            <div className="md:mr-5">
              <label htmlFor="">Name</label>
              <input
                type="email"
                placeholder="Email"
                className="border mb-4 p-2 w-full"
                name="email"
              />
            </div>

            <div>
              <label htmlFor="">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter Email"
                className="border mb-4 p-2 w-full"
              />
            </div>
            <div className="md:mr-5">
              <label htmlFor="">Phone</label>
              <input
                name="number"
                type="number"
                placeholder="Enter Phone"
                className="border mb-4 p-2 w-full"
              />
            </div>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Education</span>
                </div>
                <select className="select select-bordered">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Under SSC</option>
                  <option>SSC/Dakhil</option>
                  <option>HSC/Alim</option>
                  <option>Graduated/Degree</option>
                  <option>Others</option>
                </select>
              </label>
            </div>
            <div className="md:mr-5">
              <label htmlFor="">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter Password"
                className="border mb-4 p-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="">Confirm Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter Confirm Password"
                className="border mb-4 p-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-[#6300B3] text-white py-2 px-4 rounded mt-5">
              Register
            </button>
          </form>
        </div>

        <div className="flex items-center gap-1 justify-center mb-5">
          <p>Don't have an Account?</p>
          <Link to={"/login"} className="underline text-blue-600">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
