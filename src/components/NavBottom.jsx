import React from "react";
import { HiHome, HiSearchCircle, HiUserGroup, HiViewGrid, HiSun, HiMoon } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

const navLinks = [
  { path: "/", icon: <HiHome className="text-xl" /> },
  { path: "/discover", icon: <HiViewGrid className="text-xl" /> },
  { path: "/search", icon: <HiSearchCircle className="text-xl" /> },
  { path: "/top-artists", icon: <HiUserGroup className="text-xl" /> },
];

export default function NavBottom() {
  const [darkMode, setDarkMode] = useDarkMode();

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="text-grey-200 absolute bottom-0 left-0 z-50 block h-11 w-full bg-opacity-30 text-xl text-light_bg_Side backdrop-blur-2xl md:hidden">
      <div className="flex h-11 w-full items-center justify-between bg-amber-900 bg-opacity-40 px-3 text-orange-300 backdrop-blur-xl dark:bg-indigo-400 dark:bg-opacity-30 dark:text-orange-500">
        {navLinks.map((link, index) => (
          <NavLink key={index} to={link.path}>
            {link.icon}
          </NavLink>
        ))}
        <button
          className="flex w-7 transform border-yellow-700 p-1 text-light_txt_Main outline-none transition-all duration-150 dark:border-white dark:text-dark_txt_Main"
          onClick={handleThemeChange}
        >
          {!darkMode ? (
            <HiSun className="cursor-pointer text-3xl text-yellow-300" />
          ) : (
            <HiMoon className="cursor-pointer text-3xl text-white" />
          )}
        </button>
      </div>
    </div>
  );
}
