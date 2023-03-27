import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);

  // store dark mode in local storage
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setDarkMode(true);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // change mode with changes theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // handle dark mode button
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="flex h-full w-full  flex-col  items-center justify-start gap-4 bg-light_bg_Side py-2  px-4 pr-7 dark:bg-dark_bg_Side">
      <h2 className="cursor-pointer  py-3 px-2 font-sans text-base font-bold text-light_txt_Main dark:text-dark_txt_Main">
        Music App
      </h2>

      <ul className="flex w-full cursor-pointer  flex-col items-start gap-3 text-light_txt_Main dark:text-dark_txt_Main  ">
        <Link to="/">
          <li className="flex items-center   text-left font-serif font-bold ">
            <HiOutlineHome className="mr-2" />
            Discover
          </li>
        </Link>
        <li className="flex items-center   text-left font-serif font-bold ">
          <HiOutlinePhotograph className="mr-2" />
          Search
        </li>
        <Link to="/top-artists">
          <li className="flex items-center   text-left font-serif font-bold ">
            <HiOutlineUserGroup className="mr-2" />
            Artists
          </li>
        </Link>
        <li className="flex items-center   text-left font-serif font-bold ">
          <HiOutlineHashtag className="mr-2" />
          Album
        </li>
      </ul>

      {/* dark & light mode */}
      <div className="translate-x-6 transform justify-self-end md:transform-none">
        <button
          className="flex  gap-2 rounded-xl border-2 border-yellow-300 p-2 text-light_txt_Main dark:border-white dark:text-dark_txt_Main    "
          onClick={handleThemeChange}
        >
          {darkMode ? (
            <FiSun className="text-2xl text-yellow-300" />
          ) : (
            <FiMoon className="text-2xl text-white" />
          )}
          {darkMode ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
}
