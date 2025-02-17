import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import { ScaleLoader } from "react-spinners";
import { Link } from "react-router-dom";

const MyCirculars = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: myjobs = [], isLoading } = useQuery({
    queryKey: ["my-job-data"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/createJob/${user?.email}`);

      return res.data;
    },
  });

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader />
        </div>
      ) : (
        <div className="overflow-x-auto mt-5 rounded-lg ">
          <table className="table table-zebra">
            {/* head */}
            <thead className="">
              <tr className="bg-gray-600 text-white ">
                <th>SL No.</th>
                <th>Title</th>
                <th>Sallary</th>
                <th>Deadline</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {myjobs.map((job, idx: number) => (
                <tr
                  key={idx}
                  className={`${
                    (idx + 1) / 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}>
                  <th>{idx + 1}</th>
                  <td>{job.jobTitle}</td>
                  <td>{job.salary}</td>
                  <td>{job.deadline}</td>
                  <td>
                    <Link to={`/job/${job._id}`}>VIEW</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyCirculars;
