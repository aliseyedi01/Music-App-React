import { FiSun } from "react-icons/fi";

export default function Navbar() {
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
        <button className="rounded-xl  border-2 border-yellow-300 p-2   dark:border-white ">
          <FiSun className="text-base text-yellow-300 md:text-2xl" />
        </button>
      </div>
    </div>
  );
}
