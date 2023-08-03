// react
import React from "react";
// hooks
import useDarkMode from "../../hooks/useDarkMode";
// Icons
import { HiSun, HiMoon } from "react-icons/hi";

const DarkModeBtn = () => {
  const [darkMode, handleThemeChange] = useDarkMode();

  return (
    <div className="absolute bottom-4">
      <button
        className="flex  w-32 transform gap-1 rounded-xl border-2 border-yellow-700 p-1 text-light_txt_Main outline-none transition-all duration-150 hover:bg-orange-400 dark:border-white dark:text-dark_txt_Main hover:dark:bg-white/50    "
        onClick={() => handleThemeChange()}
      >
        {!darkMode ? (
          <p className=" flex items-center gap-1 text-base text-yellow-800 ">
            <HiMoon className="text-2xl" />
            Dark Mode
          </p>
        ) : (
          <p className="flex items-center gap-1 text-base text-white ">
            <HiSun className="text-2xl" />
            Light Mode
          </p>
        )}
      </button>
    </div>
  );
};

export default DarkModeBtn;
