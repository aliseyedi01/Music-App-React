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
      <h2 className="cursor-pointer  py-3 px-2 font-Lobster  text-2xl  text-light_txt_Main dark:text-dark_txt_Main">
        Music App
      </h2>

      <ul className="flex w-full cursor-pointer  flex-col items-start gap-3 text-light_txt_Main dark:text-dark_txt_Main  ">
        <Link to="/">
          <li className="flex items-center   text-left font-Lemon  ">
            <HiOutlineHome className="mr-2" />
            Discover
          </li>
        </Link>
        <li className="flex items-center   text-left font-Lemon  ">
          <HiOutlinePhotograph className="mr-2" />
          Search
        </li>
        <Link to="/top-artists">
          <li className="flex items-center   text-left font-Lemon  ">
            <HiOutlineUserGroup className="mr-2" />
            Artists
          </li>
        </Link>
        <li className="flex items-center   text-left font-Lemon  ">
          <HiOutlineHashtag className="mr-2" />
          Album
        </li>
      </ul>

      {/* dark & light mode */}
      <div className="translate-x-6 transform justify-self-end md:transform-none">
        <button
          className="flex  transform gap-2 rounded-xl border-2 border-yellow-700 p-2 text-light_txt_Main outline-none transition-all duration-150 hover:bg-orange-400 dark:border-white dark:text-dark_txt_Main hover:dark:bg-white/50    "
          onClick={handleThemeChange}
        >
          {!darkMode ? (
            <FiSun className="text-2xl text-yellow-700" />
          ) : (
            <FiMoon className="text-2xl text-white" />
          )}
          {darkMode ? (
            <p className=" text-white">Dark</p>
          ) : (
            <p className="text-yellow-800 ">Light</p>
          )}
        </button>
      </div>
    </div>
  );
}
