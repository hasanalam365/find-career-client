import React from "react";
import { Parallax } from "react-scroll-parallax";

const UserCount = () => {
  return (
    <div className="container mx-auto  mt-20">
      {/* Parallax background with overlay text */}

      <Parallax speed={-10}>
        <div
          className="relative w-full h-[200px] bg-gray-300 flex items-center justify-between "
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/BcnDj1J/paralaxx-image.jpg')", // Replace with your image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          {/* Optional dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Overlay text content */}
        </div>
      </Parallax>
      <div className="relative z-10  gap-5 text-white mb-20 -mt-32 px-20">
        <div className="flex items-center justify-center mb-5">
          <h2 className="text-4xl font-bold">Our Contribution</h2>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-center flex-col">
            <h4 className="text-5xl font-semibold">4M+</h4>
            <p className="opacity-75">4 Million Daily Active Users</p>{" "}
            {/* Fixed grammar */}
          </div>
          <div className="flex items-center justify-center flex-col">
            <h4 className="text-5xl font-semibold">12K</h4>
            <p className="opacity-75">Over 12k Open Job Positions</p>{" "}
            {/* Fixed grammar */}
          </div>
          <div className="flex items-center justify-center flex-col">
            <h4 className="text-5xl font-semibold">20M+</h4>{" "}
            {/* Fixed number format */}
            <p className="opacity-75">20 Million Stories Shared</p>{" "}
            {/* Fixed grammar */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCount;
