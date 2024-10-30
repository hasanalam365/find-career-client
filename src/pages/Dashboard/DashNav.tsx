import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoChatbubblesOutline, IoHomeOutline, IoMenu } from "react-icons/io5";

const DashNav = () => {
  const [dashNavIsOpen, setDashNavIsOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col h-full p-3 border-2 dark:bg-gray-50 dark:text-gray-800">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2>Dashboard</h2>
            <button
              onClick={() => setDashNavIsOpen(!dashNavIsOpen)}
              className="p-2">
              {dashNavIsOpen ? (
                <CgMenuRight className="text-2xl" />
              ) : (
                <IoMenu className="text-2xl" />
              )}
            </button>
          </div>
          <div className="divider"></div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md">
                  <IoHomeOutline className="text-xl" />
                  <span>Home</span>
                </a>
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
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md">
                  <FaRegHeart className="text-[18px]" />
                  <span>Wishlist</span>
                </a>
              </li>

              <li className="rounded-sm">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md">
                  <FiEdit className="text-xl" />
                  <span>Profile</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md">
                  <CiLogout className="text-xl" />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className="w-12 h-12 rounded-lg dark:bg-gray-500"
          />
          <div>
            <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
            <span className="flex items-center space-x-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-gray-600">
                View profile
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
