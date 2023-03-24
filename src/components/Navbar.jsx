import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Navbar() {
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
    <div className="flex items-center justify-between bg-gray-500 px-3">
      <div className="flex  justify-between gap-2">
        <ul className="cursor-pointer">
          <li className="font-serif font-bold">Home</li>
        </ul>
        <ul className="cursor-pointer">
          <li className="font-serif font-bold">Search</li>
        </ul>
      </div>

      <h2 className="cursor-pointer font-sans font-bold">Music App</h2>

      {/* dark & light mode */}
      <div className="translate-x-6 transform md:transform-none">
        <button className="rounded-xl  border-2 border-yellow-300 p-2   dark:border-white " onClick={handleThemeChange}>
          {darkMode ? <FiSun className="text-2xl text-yellow-300" /> : <FiMoon className="text-2xl text-white" />}
        </button>
      </div>
    </div>
  );
}
