import { GoBookmark } from "react-icons/go";

const FindJobDetails = () => {
  return (
    <div>
      <div className="p-8 flex flex-row gap-3">
        {/* rigth side jobs */}
        <div className="w-1/4">
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
        </div>
        {/* middle job details */}
        <div className="w-2/4 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Sr. UX Designer</h2>
            <div className="flex items-center justify-center gap-3">
              <div className="bg-[#d7bdf1] py-1 px-2 rounded-full ">
                <p className="text-sm font-medium text-[#6900d1] flex items-center justify-center">
                  Expert
                </p>
              </div>
              <div className="bg-[#E1FEEE] py-1 px-2 rounded-full ">
                <p className="text-sm font-medium text-[#02e467] flex items-center justify-center">
                  Part Time
                </p>
              </div>
              <div className="bg-[#ee9d8a] py-1 px-2 rounded-full ">
                <p className="text-sm font-medium text-[#f50b03] flex items-center justify-center">
                  Remote
                </p>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="space-y-2">
            <h4 className="text-lg font-medium">About the role</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              voluptatem tenetur delectus perspiciatis excepturi officia ab
              accusantium, ipsum, magni praesentium eveniet temporibus voluptas
              quam quisquam necessitatibus repellat corrupti. Consequuntur,
              perferendis.
            </p>
            <h4 className="text-lg font-medium">Responsibilities</h4>
            <ul className="list-disc pl-8">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia nulla nihil qui adipisicing elit. Mollitia nulla nihil
                qui
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia nulla nihil qui
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia nulla nihil qui. Lorem ipsum consectetur adipisicing
                elit. Mollitia nulla nihil qui
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia nulla nihil qui
              </li>
            </ul>
            <div>
              <h4 className="text-lg font-medium mb-2">Required Skills</h4>
              <div className="flex  gap-3">
                <div className="bg-[#eee8e8] rounded-lg py-1 px-2">
                  <p className="font-medium">Team Work</p>
                </div>
                <div className="bg-[#eee8e8] rounded-lg py-1 px-2">
                  <p className="font-medium">Adobe XD</p>
                </div>
                <div className="bg-[#eee8e8] rounded-lg py-1 px-2">
                  <p className="font-medium">UI/UX Designer</p>
                </div>
                <div className="bg-[#eee8e8] rounded-lg py-1 px-2">
                  <p className="font-medium">Figma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* job post owner profile */}
        <div className="w-1/4"></div>
      </div>
    </div>
  );
};

export default FindJobDetails;
