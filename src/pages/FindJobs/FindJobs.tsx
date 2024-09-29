import { GoBookmark } from "react-icons/go";
import { Link } from "react-router-dom";

const FindJobs = () => {
  return (
    <div className="flex gap-5 p-8">
      {/* left side filter */}
      <div className="bg-gray-300 p-8 w-1/6">
        <h4 className="texl-xl font-medium">Filters</h4>
        <div className="divider mt-0 mb-0"></div>
        <div>
          <h4 className="mb-2 opacity-70">Working Schedule</h4>
          <div className="items-start">
            <div className="">
              <label className="label cursor-pointer w-[105px]">
                <input type="checkbox" className="checkbox " />
                <span className="label-text pl-0">Full Time</span>
              </label>
            </div>
            <div className="">
              <label className="label cursor-pointer w-[110px]">
                <input type="checkbox" className="checkbox " />
                <span className="label-text ">Part Time</span>
              </label>
            </div>
            <div className="">
              <label className="label cursor-pointer w-[93px]">
                <input type="checkbox" className="checkbox " />
                <span className="label-text ">Tution</span>
              </label>
            </div>
            <div className="">
              <label className="label cursor-pointer w-[130px]">
                <input type="checkbox" className="checkbox " />
                <span className="label-text ">Project Work</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* right side job post */}
      <div className="">
        <div>
          <h3 className="text-2xl font-semibold mb-5">Recommended Jobs</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* single Card */}
          <div className="card bg-base-100 border border-1 border-gray-300  shadow-xl p-1">
            <figure>
              <div className="bg-green-200 h-[300px] w-[374px] p-4 rounded-lg">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="bg-white rounded-full py-2 px-4">
                      <p className="font-medium">20 May, 2024</p>
                    </div>
                    <div className="bg-white rounded-full p-1">
                      <GoBookmark className="text-2xl text-black" />
                    </div>
                  </div>
                </div>
                {/* Company and Position Title */}
                <div className="flex flex-col mt-5">
                  <h3 className="font-semibold">Amazon</h3>

                  <div className="">
                    <h2 className="text-3xl font-bold">
                      Senior UI/UX Designer Designer
                    </h2>
                  </div>
                </div>
                {/* Job Requirement */}
                <div className="flex flex-wrap gap-3 mt-5">
                  <div className="border border-1 border-black rounded-full py-1 px-2">
                    <p className="font-medium">Part Time</p>
                  </div>
                  <div className="border border-1 border-black rounded-full py-1 px-2">
                    <p className="font-medium">Education: 10th HSC</p>
                  </div>
                  <div className="border border-1 border-black rounded-full py-1 px-2">
                    <p className="font-medium">Age: 20-25</p>
                  </div>

                  <div className="border border-1 border-black rounded-full py-1 px-2">
                    <p className="font-medium">Experience: 0 Year</p>
                  </div>
                </div>
              </div>
            </figure>
            <div className="flex items-center justify-between  p-4">
              <div>
                <h4 className="text-lg font-semibold">৳250/day</h4>
                <p className="opacity-90">Deadline: 25 August,2024</p>
              </div>
              <div>
                <Link to="/find-job/details/1">
                  <button className="btn btn-sm bg-black text-white">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* single Card */}
          <div className="card bg-base-100 border border-1 border-gray-300  shadow-xl p-1">
            <figure>
              <div className="bg-[#FFE1CC] h-[300px] w-[374px] p-4 rounded-lg">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="bg-white rounded-full py-2 px-4">
                      <p className="font-medium">20 May, 2024</p>
                    </div>
                    <div className="bg-white rounded-full p-1">
                      <GoBookmark className="text-2xl text-black" />
                    </div>
                  </div>
                </div>
                {/* Company and Position Title */}
                <div className="flex flex-col mt-5">
                  <h3 className="font-semibold">Amazon</h3>

                  <div className="">
                    <h2 className="text-3xl font-bold">
                      Senior UI/UX Designer Designer
                    </h2>
                  </div>
                </div>
                {/* Job Requirement */}
                <div className="flex flex-wrap gap-3 mt-5">
                  <div className="border border-1 border-black rounded-full py-1 px-2">
                    <p className="font-medium">Part Time</p>
                  </div>
                  <div className="border border-1 border-black rounded-full py-1 px-2">
                    <p className="font-medium">Education: 10th HSC</p>
                  </div>
                  <div className="border border-1 border-black rounded-full py-1 px-2">
                    <p className="font-medium">Age: 20-25</p>
                  </div>

                  <div className="border border-1 border-black rounded-full py-1 px-2">
                    <p className="font-medium">Experience: 0 Year</p>
                  </div>
                </div>
              </div>
            </figure>
            <div className="flex items-center justify-between  p-4">
              <div>
                <h4 className="text-lg font-semibold">৳250/day</h4>
                <p className="opacity-90">Deadline: 25 August,2024</p>
              </div>
              <div>
                <button className="btn btn-sm bg-black text-white">
                  Details
                </button>
              </div>
            </div>
          </div>
          {/* single Card */}
          <div className="card bg-base-100 border border-1 border-gray-300  shadow-xl p-1">
            <figure>
              <div className="bg-[#E3DBFA] h-[300px] w-[374px] p-4 rounded-lg">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="bg-white rounded-full py-2 px-4">
                      <p className="font-medium">20 May, 2024</p>
                    </div>
                    <div className="bg-white rounded-full p-1">
                      <GoBookmark className="text-2xl text-black" />
                    </div>
                  </div>
                </div>
                {/* Company and Position Title */}
                <div className="flex flex-col mt-5">
                  <h3 className="font-semibold">Amazon</h3>

                  <div className="">
                    <h2 className="text-3xl font-bold">
                      Senior UI/UX Designer Designer
                    </h2>
                  </div>
                </div>
                {/* Job Requirement */}
                <div className="flex flex-wrap gap-3 mt-5">
                  <div className="border border-1 border-black rounded-full py-1 px-2">
                    <p className="font-medium">Part Time</p>
                  </div>
                  <div className="border border-1 border-black rounded-full py-1 px-2">
                    <p className="font-medium">Education: 10th HSC</p>
                  </div>
                  <div className="border border-1 border-black rounded-full py-1 px-2">
                    <p className="font-medium">Age: 20-25</p>
                  </div>

                  <div className="border border-1 border-black rounded-full py-1 px-2">
                    <p className="font-medium">Experience: 0 Year</p>
                  </div>
                </div>
              </div>
            </figure>
            <div className="flex items-center justify-between  p-4">
              <div>
                <h4 className="text-lg font-semibold">৳250/day</h4>
                <p className="opacity-90">Deadline: 25 August,2024</p>
              </div>
              <div>
                <button className="btn btn-sm bg-black text-white">
                  Details
                </button>
              </div>
            </div>
          </div>
          {/* single Card */}
          <div className="card bg-base-100 border border-1 border-[#DFF3FE]  shadow-xl p-1">
            <figure>
              <div className="bg-green-200 h-[300px] w-[374px] p-4 rounded-lg">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="bg-white rounded-full py-2 px-4">
                      <p className="font-medium">20 May, 2024</p>
                    </div>
                    <div className="bg-white rounded-full p-1">
                      <GoBookmark className="text-2xl text-black" />
                    </div>
                  </div>
                </div>
                {/* Company and Position Title */}
                <div className="flex flex-col mt-5">
                  <h3 className="font-semibold">Amazon</h3>

                  <div className="">
                    <h2 className="text-3xl font-bold">
                      Senior UI/UX Designer Designer
                    </h2>
                  </div>
                </div>
                {/* Job Requirement */}
                <div className="flex flex-wrap gap-3 mt-5">
                  <div className="border border-1 border-black rounded-full py-1 px-2">
                    <p className="font-medium">Part Time</p>
                  </div>
                  <div className="border border-1 border-black rounded-full py-1 px-2">
                    <p className="font-medium">Education: 10th HSC</p>
                  </div>
                  <div className="border border-1 border-black rounded-full py-1 px-2">
                    <p className="font-medium">Age: 20-25</p>
                  </div>

                  <div className="border border-1 border-black rounded-full py-1 px-2">
                    <p className="font-medium">Experience: 0 Year</p>
                  </div>
                </div>
              </div>
            </figure>
            <div className="flex items-center justify-between  p-4">
              <div>
                <h4 className="text-lg font-semibold">৳250/day</h4>
                <p className="opacity-90">Deadline: 25 August,2024</p>
              </div>
              <div>
                <button className="btn btn-sm bg-black text-white">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
