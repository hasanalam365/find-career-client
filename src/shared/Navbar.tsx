import React, { useEffect, useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navLinks = (
    <>
      <NavLink to="/find-jobs">Find Jobs</NavLink>
      <NavLink to="/find-jobs">Blogs</NavLink>
      <NavLink to="/find-jobs">Contacts</NavLink>
      <NavLink to="/find-jobs">About Us</NavLink>
    </>
  );

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div
      className={
        nav
          ? "bg-black text-white p-6 h-20 fixed w-full top-0 z-50"
          : "shadow-md p-8 h-24"
      }>
      <div className="flex items-center justify-between">
        {/* left side nav*/}
        <div>
          <button className="text-xl font-medium">Find Career</button>
        </div>
        {/* middle side nav*/}
        <div>
          <ul className="flex items-center justify-center gap-5 text-lg">
            {navLinks}
          </ul>
        </div>
        {/* right side nav*/}
        <div className="flex items-center justify-center gap-3">
          <div className="text-2xl">
            <IoMdNotifications />
          </div>
          <div>
            <h4 className="font-medium">User Name</h4>
          </div>
          <div className="text-2xl">
            <RxAvatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
