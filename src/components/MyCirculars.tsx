import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";

const MyCirculars = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: myjobs = [] } = useQuery({
    queryKey: ["my-job-data"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/createJob/${user?.email}`);

      return res.data;
    },
  });

  console.log(myjobs);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {myjobs.map((job, idx: number) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td></td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCirculars;