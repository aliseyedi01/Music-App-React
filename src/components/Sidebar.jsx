import { Link } from "react-router-dom";
// Icons
import { SiMusicbrainz } from "react-icons/si";
import { HiHome, HiSearchCircle, HiUserGroup, HiViewGrid, HiSun, HiMoon } from "react-icons/hi";
// Components
import DarkModeBtn from "./Button/DarkModeBtn";

export default function Sidebar() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-start gap-5   bg-light_bg_Side p-3 dark:bg-dark_bg_Side">
      <div className="flex w-full items-center justify-center text-light_txt_Main dark:text-dark_txt_Main">
        <SiMusicbrainz className="mr-1 text-2xl" />
        <h2 className="cursor-pointer  py-3 px-1 font-Lobster  text-xl  ">Music App</h2>
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

      <DarkModeBtn />
    </div>
  );
}
