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
    <div className="">
      <div className="">
        <div>
          <h2 className="text-2xl font-bold">Register</h2>
          <form onSubmit={handleRegister}>
            <div>
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
            <div>
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
                  <option>SSC</option>
                  <option>HSC</option>
                  <option>Graduated/Degree</option>
                  <option>Others</option>
                </select>
              </label>
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
