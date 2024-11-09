import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
  const [education, setEducation] = useState("Pick One");
  const [errorPassword, setErrorPassword] = useState("");
  const [othersInput, setOthersInput] = useState(false);
  const [errorCaptcha, setErrorCaptcha] = useState("");

  const axiosPublic = useAxiosPublic();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const captchaValue = form.captcha.value;

    const otherEdu = othersInput ? form.others.value : "";

    if (confirmPassword !== password) {
      return setErrorPassword("Please! check your password again.......");
    } else {
      setErrorPassword("");
    }

    if (!validateCaptcha(captchaValue)) {
      return setErrorCaptcha("Captcha does not match , please try again");
    } else {
      setErrorCaptcha("");

      const userInfo = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        others: othersInput ? otherEdu : "",
      };

      //api called
      const result = axiosPublic.post("/addUser", userInfo);
      console.log(result);
    }
  };

  const handleEducationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedEducation = e.target.value;
    setEducation(selectedEducation);
    setOthersInput(selectedEducation === "Others");
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

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
              className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg"
            />
          </div>
          <div className="md:mr-5">
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              type="text"
              placeholder="Enter Phone"
              className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="education">Education</label>
            <select
              name="education"
              value={education}
              onChange={handleEducationChange}
              className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg">
              <option disabled defaultValue={""}>
                Pick One
              </option>
              <option>Under SSC</option>
              <option>SSC/Dakhil</option>
              <option>HSC/Alim</option>
              <option>Graduated/Degree</option>
              <option>Others</option>
            </select>
          </div>
          {othersInput && (
            <div className="col-span-2">
              <label htmlFor="education">Others Education</label>
              <input
                name="others"
                type="text"
                placeholder="Others education details"
                className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg"
              />
            </div>
          )}
          <div className="md:mr-5">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Enter Confirm Password"
              className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg"
            />
            {errorPassword ? (
              <p className="text-red-600 text-sm">{errorPassword} </p>
            ) : (
              ""
            )}
          </div>
          <div className="md:mr-5">
            <label htmlFor="captcha">
              <LoadCanvasTemplate />
            </label>
            <input
              name="captcha"
              type="text"
              placeholder="Enter Captcha"
              className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg"
            />
            {errorCaptcha && (
              <p className="text-red-600 text-sm"> {errorCaptcha}</p>
            )}
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
