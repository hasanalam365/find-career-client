import React from "react";
import { SiTheboringcompany } from "react-icons/si";

const FeaturesJobs = () => {
  return (
    <div className="mb-8">
      <div className="flex flex-col -space-y-1 items-center justify-center mt-5 mb-8 ">
        <h5 className="opacity-75">Here You Can See</h5>
        <h3 className="text-4xl font-semibold">
          Features <span className="text-blue-600">Jobs</span>{" "}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 container mx-auto">
        <div className="flex gap-5 items-center justify-between bg-base-100 shadow-xl p-4 hover:border-b-2 hover:border-b-blue-600 hover:rounded-xl">
          <figure>
            <SiTheboringcompany className="text-6xl md:text-6xl lg:text-8xl ml-5" />
          </figure>

          <div>
            <h3>Technical Database Engineer</h3>
            <h4 className="text-blue-600">Data Entry Management Company</h4>
            <div className="flex items-center  gap-5 mt-2">
              <p className="bg-[#6ACA00] text-white text-sm px-2 py-1">
                Full Time
              </p>
              <p>-</p>
              <p>Jamalpur</p>
            </div>
            <div className="mt-3 flex items-center justify-end md:hidden lg:hidden">
              <button className=" border-2 border-[#6ACA00] text-[#6ACA00] px-2 py-1 transition-colors duration-300 hover:text-white hover:bg-[#6ACA00]">
                Apply Now
              </button>
            </div>
          </div>
          <div>
            <button className="hidden md:block lg:block border-2 border-[#6ACA00] text-[#6ACA00] px-2 py-1 transition-colors duration-300 hover:text-white hover:bg-[#6ACA00]">
              Apply Now
            </button>
          </div>
        </div>

        <div className="flex gap-5 items-center justify-between bg-base-100 shadow-xl p-4">
          <figure>
            <SiTheboringcompany className="text-8xl ml-5" />
          </figure>

          <div>
            <h3>Technical Database Engineer</h3>
            <h4 className="text-blue-600">Data Entry Management Company</h4>
            <div className="flex items-center justify-center gap-5 mt-2">
              <p className="bg-[#6ACA00] text-white text-sm px-2 py-1">
                Full Time
              </p>
              <p>-</p>
              <p>Jamalpur</p>
            </div>
          </div>
          <div>
            <button className=" border-2 border-[#6ACA00] text-[#6ACA00] px-2 py-1 transition-colors duration-300 hover:text-white hover:bg-[#6ACA00]">
              Apply Now
            </button>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-between bg-base-100 shadow-xl p-4">
          <figure>
            <SiTheboringcompany className="text-8xl ml-5" />
          </figure>

          <div>
            <h3>Technical Database Engineer</h3>
            <h4 className="text-blue-600">Data Entry Management Company</h4>
            <div className="flex items-center justify-center gap-5 mt-2">
              <p className="bg-[#6ACA00] text-white text-sm px-2 py-1">
                Full Time
              </p>
              <p>-</p>
              <p>Jamalpur</p>
            </div>
          </div>
          <div>
            <button className=" border-2 border-[#6ACA00] text-[#6ACA00] px-2 py-1 transition-colors duration-300 hover:text-white hover:bg-[#6ACA00]">
              Apply Now
            </button>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-between bg-base-100 shadow-xl p-4">
          <figure>
            <SiTheboringcompany className="text-8xl ml-5" />
          </figure>

          <div>
            <h3>Technical Database Engineer</h3>
            <h4 className="text-blue-600">Data Entry Management Company</h4>
            <div className="flex items-center justify-center gap-5 mt-2">
              <p className="bg-[#6ACA00] text-white text-sm px-2 py-1">
                Full Time
              </p>
              <p>-</p>
              <p>Jamalpur</p>
            </div>
          </div>
          <div>
            <button className=" border-2 border-[#6ACA00] text-[#6ACA00] px-2 py-1 transition-colors duration-300 hover:text-white hover:bg-[#6ACA00]">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="btn bg-[#6ACA00] text-white mt-5 hover:bg-blue-500 
        mb-10">
          View All Features Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturesJobs;
