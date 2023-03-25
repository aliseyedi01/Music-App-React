import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from "react-icons/hi";

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
    <div className="flex h-full w-full  flex-col  items-center justify-start gap-4 bg-gray-500 py-2  px-4 pr-7 dark:bg-blue-900">
      <h2 className="cursor-pointer  py-3 px-2 font-sans text-base font-bold text-gray-900 dark:text-stone-300">Music App</h2>

      <ul className="flex w-full cursor-pointer  flex-col items-start gap-3  ">
        <li className="flex items-center   text-left font-serif font-bold text-gray-900 dark:text-stone-300">
          <HiOutlineHome className="mr-2" />
          Discover
        </li>
        <li className="flex items-center   text-left font-serif font-bold text-gray-900 dark:text-stone-300">
          <HiOutlinePhotograph className="mr-2" />
          Search
        </li>
        <li className="flex items-center   text-left font-serif font-bold text-gray-900 dark:text-stone-300">
          <HiOutlineUserGroup className="mr-2" />
          Artists
        </li>
        <li className="flex items-center   text-left font-serif font-bold text-gray-900 dark:text-stone-300">
          <HiOutlineHashtag className="mr-2" />
          Album
        </li>
      </ul>

      {/* dark & light mode */}
      <div className="translate-x-6 transform justify-self-end md:transform-none">
        <button
          className="flex  gap-2 rounded-xl border-2 border-yellow-300 p-2 text-white dark:border-white   dark:text-yellow-300 "
          onClick={handleThemeChange}
        >
          {darkMode ? <FiSun className="text-2xl text-yellow-300" /> : <FiMoon className="text-2xl text-white" />}
          {darkMode ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
}
