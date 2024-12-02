import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
  const { user } = useAuth();
  const [isSelect, setIsSelect] = useState(1);

  const axiosSecure = useAxiosSecure();

  const { data = [] } = useQuery({
    queryKey: ["user-data"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user.email}`);
      return res.data;
    },
  });

  console.log(data, "emai");

  const timelines = [
    { id: 1, label: "My Circular" },
    { id: 2, label: "Aplly Job" },
    { id: 3, label: "Notification" },
  ];

  return (
    <div className="bg-[#f1f1f1]">
      <div className="flex gap-5">
        <div className="avatar">
          <div className="w-24 rounded-xl">
            <img src={user?.photoURL || ""} alt="User" />
          </div>
        </div>
        <div>
          <h3>{user?.displayName}</h3>
          <h3>General Manager</h3>
          <p>{user?.email}</p>
          <p>0123456789</p>
        </div>
      </div>
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800 mt-5">
        {timelines.map((item) => (
          <a
            key={item.id}
            onClick={() => setIsSelect(item.id)}
            href="#"
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b ${
              isSelect === item.id
                ? "border-blue-500 text-blue-500"
                : "dark:border-gray-600 dark:text-gray-600"
            }`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4">
              {item.id === 1 && (
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              )}
              {item.id === 2 && (
                <>
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </>
              )}
              {item.id === 3 && (
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              )}
              {item.id === 4 && (
                <>
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </>
              )}
            </svg>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Profile;
