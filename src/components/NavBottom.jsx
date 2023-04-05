import React from "react";
import { HiHome, HiSearchCircle, HiUserGroup, HiViewGrid, HiSun, HiMoon } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

export default function NavBottom() {
  const [darkMode, setDarkMode] = useDarkMode();

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className=" text-grey-200 absolute bottom-0 left-0  z-50  block h-10 w-full bg-opacity-30 text-xl text-light_bg_Side  backdrop-blur-2xl md:hidden">
      <div className="flex h-9 w-full items-center justify-between bg-amber-900 bg-opacity-40 px-2 text-orange-300 backdrop-blur-xl  dark:bg-indigo-400 dark:bg-opacity-30  dark:text-orange-500 ">
        <NavLink to="/">
          <HiHome className="" />
        </NavLink>
        <NavLink to="/discover">
          <HiViewGrid className="" />
        </NavLink>
        <NavLink to="/search">
          <HiSearchCircle className="" />
        </NavLink>
        <NavLink to="/top-artists">
          <HiUserGroup className="" />
        </NavLink>
        <button
          className="flex w-7 transform   border-yellow-700 p-1 text-light_txt_Main outline-none transition-all duration-150  dark:border-white dark:text-dark_txt_Main   "
          onClick={handleThemeChange}
        >
          {!darkMode ? (
            <HiSun className="cursor-pointer text-2xl text-yellow-300" />
          ) : (
            <HiMoon className="cursor-pointer text-2xl text-white" />
          )}
        </button>
      </div>
    </div>
  );
}
