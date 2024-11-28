import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import {
  IoChatbubblesOutline,
  IoCreate,
  IoHomeOutline,
  IoMenu,
} from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const DashNav = () => {
  const [dashNavIsOpen, setDashNavIsOpen] = useState(false);
  const { user, signOutUser } = useAuth();

  console.log(user?.photoURL);

  return (
    <div>
      <div className="flex flex-col h-screen p-3 border-r-2  dark:bg-gray-50 dark:text-gray-800  w-[250px]">
        <div className="space-y-3">
          <div className="flex items-center p-2 gap-5 ">
            <img
              src={user?.photoURL || ""}
              alt=""
              className="w-12 h-12 rounded-lg dark:bg-gray-500"
            />
            <div>
              <h2 className="text-lg font-semibold">{user?.displayName}</h2>
              <span className="flex items-center space-x-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-600">
                  {user?.email}
                </a>
              </span>
            </div>
          </div>
          <div className="border-t-2 border-dashed"></div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link
                  to="/"
                  className="flex items-center p-2 space-x-3 rounded-md">
                  <IoHomeOutline className="text-xl" />
                  <span>Home</span>
                </Link>
              </li>

              <li className="rounded-sm">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md">
                  <IoChatbubblesOutline className="text-xl" />
                  <span>Chat</span>
                </a>
              </li>

              <li className="rounded-sm dark:bg-gray-100 dark:text-gray-900">
                <Link
                  to="/dashboard/wishlist"
                  className="flex items-center p-2 space-x-3 rounded-md">
                  <FaRegHeart className="text-[18px]" />
                  <span>Wishlist</span>
                </Link>
              </li>

              <li className="rounded-sm dark:bg-gray-100 dark:text-gray-900">
                <Link
                  to="/dashboard/create-job"
                  rel="noopener noreferrer"
                  className="flex items-center p-2 space-x-3 rounded-md">
                  <IoCreate className="text-[18px]" />
                  <span>Create Job</span>
                </Link>
              </li>

              <li className="rounded-sm">
                <Link
                  rel="noopener noreferrer"
                  to="/dashboard/profile"
                  className="flex items-center p-2 space-x-3 rounded-md">
                  <FiEdit className="text-xl" />
                  <span>Profile</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md">
                  <CiLogout className="text-xl" />
                  <button onClick={() => signOutUser()}>Logout</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
