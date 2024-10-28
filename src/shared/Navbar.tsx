import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
import { RiCloseLargeLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const { user } = useAuth();

  const navLinks = (
    <>
      <NavLink onClick={() => setIsOpenNav(false)} to="/find-jobs">
        Find Jobs
      </NavLink>
      <NavLink onClick={() => setIsOpenNav(false)} to="/blogs">
        Blogs
      </NavLink>
      <NavLink onClick={() => setIsOpenNav(false)} to="/contacts">
        Contacts
      </NavLink>
      <NavLink onClick={() => setIsOpenNav(false)} to="/about-us">
        About Us
      </NavLink>
      <NavLink onClick={() => setIsOpenNav(false)} to="/login">
        Login
      </NavLink>
      <NavLink onClick={() => setIsOpenNav(false)} to="/register">
        Register
      </NavLink>
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
    <div>
      {/* The main navbar container */}
      {!isOpenNav && (
        <div
          className={
            nav
              ? "bg-black text-white p-6 h-20 fixed w-full top-0 z-50"
              : "shadow-md p-8 h-24"
          }>
          <div className="flex items-center justify-between">
            {/* left side nav */}
            <div>
              {/* Only show on small devices */}
              <div className="flex items-center justify-center gap-3 lg:hidden">
                {/* Toggle the menu */}
                <button onClick={() => setIsOpenNav(!isOpenNav)}>
                  {isOpenNav ? (
                    <RiCloseLargeLine className="text-2xl" />
                  ) : (
                    <GiHamburgerMenu className="text-2xl" />
                  )}
                </button>
                <Link to="/">
                  <button className="text-xl font-medium">Find Career</button>
                </Link>
              </div>

              {/* Show only on large devices */}
              {!isOpenNav && (
                <div className="hidden md:hidden lg:block">
                  <Link to="/">
                    <button className="text-xl font-medium">Find Career</button>
                  </Link>
                </div>
              )}
            </div>

            {/* Middle side nav - Only for large devices */}
            {!isOpenNav && (
              <div>
                <ul className="hidden md:hidden lg:flex items-center justify-center gap-5 text-lg">
                  {navLinks}
                </ul>
              </div>
            )}

            {/* Right side nav - Only show when menu is closed */}
            {!isOpenNav && (
              <div className="flex items-center justify-center gap-3">
                <div className="text-2xl">
                  <IoMdNotifications />
                </div>
                <div>
                  <h4 className="font-medium">
                    {user ? user.displayName : "User Name"}
                  </h4>
                </div>
                <div className="text-2xl">
                  {user ? (
                    <img
                      src={user?.photoURL}
                      alt=""
                      className="w-[30px] h-[30px] rounded-full"
                    />
                  ) : (
                    <RxAvatar />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Show small/medium device nav links when the menu is open */}
      {isOpenNav && (
        <div className="bg-gray-300 h-screen overflow-auto">
          <div className="bg-white flex items-center justify-between p-4">
            <Link to="/" onClick={() => setIsOpenNav(!isOpenNav)}>
              <button className="text-xl font-medium">
                Find<span className="text-orange-600">Career</span>
              </button>
            </Link>
            <button onClick={() => setIsOpenNav(!isOpenNav)}>
              <RiCloseLargeLine className="text-2xl" />
            </button>
          </div>
          <ul className="flex flex-col mt-5 pl-5 text-lg ">{navLinks}</ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
