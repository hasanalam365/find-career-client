import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const JobPost = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: userData } = useQuery({
    queryKey: ["user-data"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  const [education, setEducation] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  const handleEducationChange = (event) => {
    setEducation(event.target.value);
  };

  const handleJobCreate = (e) => {
    const form = e.target;
    const companyName = form.companyName.value;
    console.log(companyName);
  };

  return (
    <div>
      <div className="p-4 md:p-8  lg:p-8  mx-auto">
        <div className="mb-5">
          <h2 className="text-2xl font-bold mb-2">Job a Post</h2>
          <p className="md:w-3/4">
            Find the best talent for your company/industry
          </p>
        </div>
        <div className="p-6 shadow-xl rounded-3xl">
          <form
            onSubmit={handleJobCreate}
            className="md:grid lg:grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <div className="md:mr-5">
              <label htmlFor="companyName">Company Name</label>
              <input
                name="companyName"
                type="text"
                placeholder="Enter Company Name"
                className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="Location">Location</label>
              <input
                name="socation"
                type="text"
                placeholder="Enter Location"
                className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg"
              />
            </div>
            <div className="md:mr-5">
              <label htmlFor="Sallary">Sallary</label>
              <input
                name="sallary"
                type="text"
                placeholder="Enter Sallary"
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
                <option disabled value="">
                  Pick One
                </option>
                <option>Under SSC</option>
                <option>SSC/Dakhil</option>
                <option>HSC/Alim</option>
                <option>Graduated/Degree</option>
                <option>Others</option>
              </select>
            </div>
            <div className="md:mr-5">
              <label htmlFor="Job Type">Job Type</label>
              <input
                name="jobType"
                type="text"
                placeholder="Enter Job Type"
                className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg"
              />
            </div>
            <div className="md:mr-5">
              <label htmlFor="Responsibility">Responsibility</label>
              <textarea
                name="responsibility"
                id=""
                placeholder="Type..."
                className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg"></textarea>
            </div>
            <div className="md:mr-5">
              <label htmlFor="holderName">Your Name</label>
              <input
                value={user?.displayName || userData?.name || ""}
                name="holderName"
                type="text"
                placeholder="Enter Holder Name"
                className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg"
                readOnly
              />
            </div>
            <div>
              <label htmlFor="holderEmail">Email</label>
              <input
                value={user?.email || userData?.email || ""}
                name="holderEmail"
                type="email"
                placeholder="Enter Email"
                className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg"
                readOnly
              />
            </div>
          </form>
          <button
            type="submit"
            className="bg-[#6300B3] text-white py-2 px-4 rounded mt-5 col-span-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
