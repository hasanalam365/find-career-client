import React, { useState, FormEvent, ChangeEvent } from "react";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import useDivisions from "../../hooks/useDivisions";
import useDistricts from "../../hooks/useDistricts";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUpazilas from "../../hooks/useUpazilas";

interface UserData {
  name: string;
  email: string;
}

const JobPost: React.FC = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [divisions] = useDivisions();
  const [education, setEducation] = useState<string>("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [jobType, setJobType] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedAddress2, setSelectedAddress2] = useState("");
  const [districts] = useDistricts(selectedAddress);
  const navigate = useNavigate();

  const [upazilas] = useUpazilas(selectedAddress2);

  const { data: userData } = useQuery<UserData>({
    queryKey: ["user-data"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      return res.data;
    },
  });

  const date = new Date();
  const postDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);

  date.setDate(date.getDate() + 15); // Add 15 days

  const deadline = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);

  const handleEducationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setEducation(event.target.value);
  };
  const handledivisionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDivision(event.target.value);
    const selectedName = event.target.value;
    const selectedDivision = divisions.find(
      (division: { name: string }) => division.name === selectedName
    );

    if (selectedDivision) {
      setSelectedAddress(selectedDivision.id);
    }
  };
  const handleDistrictChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDistrict(event.target.value);
    const selectedName = event.target.value;
    const selectedDistrict = districts.find(
      (district: { name: string }) => district.name === selectedName
    );

    if (selectedDistrict) {
      setSelectedAddress2(selectedDistrict.id);
    }
  };
  const handleUpazilaChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setUpazila(event.target.value);
  };
  const handleJobTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setJobType(event.target.value);
  };

  const handleJobCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const companyName = form.companyName.value;
    const salary = form.sallary.value;
    const jobTitle = form.jobTitle.value;
    const responsibility = form.responsibility.value;
    const holderName = user?.displayName || userData?.name;
    const holderEmail = user?.email || userData?.email;
    const profileURL = user?.photoURL;

    const jobData = {
      companyName,
      salary,
      jobType,
      jobTitle,
      holderName,
      holderEmail,
      responsibility,
      education,
      postDate,
      deadline,
      profileURL,
      location: {
        division,
        district,
        upazila,
      },
    };
    try {
      const res = await axiosPublic.post("/createJob", jobData);
      if (res.data.insertedId) {
        toast("Successfully done");
        navigate("/dashboard");
      }
    } catch {
      console.log("error ");
    }
  };

  return (
    <div>
      <div className="p-4 md:p-8 lg:p-8 mx-auto">
        <div className="mb-5">
          <h2 className="text-2xl font-bold mb-2">Post a Job</h2>
          <p className="md:w-3/4">
            Find the best talent for your company/industry/people
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
              <label htmlFor="division">Division</label>
              <select
                name="division"
                value={division}
                onChange={handledivisionChange}
                className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg">
                <option disabled value="">
                  Choose Division
                </option>
                {divisions.map((division: { id: string; name: string }) => (
                  <option key={division.name} value={division.name}>
                    {division.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="district">District</label>
              <select
                name="district"
                value={district}
                onChange={handleDistrictChange}
                className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg">
                <option disabled value="">
                  Choose District
                </option>
                {districts.map((district: { id: string; name: string }) => (
                  <option key={district.id} value={district.name}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="upazila">Upazila</label>
              <select
                name="upazila"
                value={upazila}
                onChange={handleUpazilaChange}
                className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg">
                <option disabled value="">
                  Choose Upazila
                </option>
                {upazilas.map((upazila: { id: string; name: string }) => (
                  <option key={upazila.id} value={upazila.name}>
                    {upazila.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:mr-5">
              <label htmlFor="Sallary">Salary</label>
              <input
                name="sallary"
                type="text"
                placeholder="Enter Salary"
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
                <option>Others (any type)</option>
              </select>
            </div>
            <div className="md:mr-5">
              <label htmlFor="Job Type">Job Title</label>
              <input
                name="jobTitle"
                type="text"
                placeholder="Enter Job Title"
                className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="upazila">Job Type</label>
              <select
                name="upazila"
                value={jobType}
                onChange={handleJobTypeChange}
                className="border p-2 w-full focus:outline-none focus:border-[#6300B3] rounded-lg">
                <option disabled value="">
                  Choose one
                </option>
                <option value="Full Time">Full Time (In-Office)</option>
                <option value="Part Time">Part Time (In-Office)</option>
                <option value="Part Time">Full Time (Remote)</option>
                <option value="Part Time">Part Time (Remote)</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="Responsibility">Responsibility</label>
              <textarea
                name="responsibility"
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
            <button
              type="submit"
              className="bg-[#6300B3] text-white py-2 px-4 rounded mt-5 col-span-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
