import { Link } from "react-router-dom";
import { SiMusicbrainz } from "react-icons/si";

import {
  HiHome,
  HiSearchCircle,
  HiUserGroup,
  HiViewGrid,
  HiSun,
  HiMoon,
} from "react-icons/hi";
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
    <div className="relative flex h-full w-full flex-col items-center justify-start gap-5   bg-light_bg_Side p-3 dark:bg-dark_bg_Side">
      <div className="flex w-full items-center justify-center text-light_txt_Main dark:text-dark_txt_Main">
        <SiMusicbrainz className="mr-1 text-2xl" />
        <h2 className="cursor-pointer  py-3 px-1 font-Lobster  text-xl  ">
          Music App
        </h2>
      </div>

      <div className="">
        <ul className="flex w-full cursor-pointer flex-col place-items-start gap-2   text-light_txt_Main dark:text-dark_txt_Main  ">
          <Link to="/home">
            <li className="flex items-center   text-left font-Lemon  ">
              <HiHome className="mr-2" />
              Home
            </li>
          </Link>
          <Link to="/discover">
            <li className="flex items-center   text-left font-Lemon  ">
              <HiViewGrid className="mr-2" />
              Discover
            </li>
          </Link>
          <Link to="/search">
            <li className="flex items-center   text-left font-Lemon  ">
              <HiSearchCircle className="mr-2" />
              Search
            </li>
          </Link>
          <Link to="/top-artists">
            <li className="flex items-center   text-left font-Lemon  ">
              <HiUserGroup className="mr-2" />
              Artists
            </li>
          </Link>
        </ul>
      </div>

      {/* dark & light mode */}
      <div className=" absolute bottom-4">
        <button
          className="flex  w-32 transform gap-1 rounded-xl border-2 border-yellow-700 p-1 text-light_txt_Main outline-none transition-all duration-150 hover:bg-orange-400 dark:border-white dark:text-dark_txt_Main hover:dark:bg-white/50    "
          onClick={handleThemeChange}
        >
          {!darkMode ? (
            <HiSun className="text-2xl text-yellow-700" />
          ) : (
            <HiMoon className="text-2xl text-white" />
          )}
          {darkMode ? (
            <p className=" text-base text-white">Dark Mode</p>
          ) : (
            <p className="text-base text-yellow-800 ">Light Mode</p>
          )}
        </button>
      </div>
    </div>
  );
}
