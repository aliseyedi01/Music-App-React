// react
import { Link } from "react-router-dom";
// Icons
import { SiMusicbrainz } from "react-icons/si";
import { HiHome, HiSearchCircle, HiUserGroup, HiViewGrid } from "react-icons/hi";
// Components
import DarkModeBtn from "./Button/DarkModeBtn";

const links = [
  { path: "/home", icon: <HiHome className="mr-2" />, text: "Home" },
  { path: "/discover", icon: <HiViewGrid className="mr-2" />, text: "Discover" },
  { path: "/search", icon: <HiSearchCircle className="mr-2" />, text: "Search" },
  { path: "/top-artists", icon: <HiUserGroup className="mr-2" />, text: "Artists" },
];

export default function Sidebar() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-start gap-5 bg-light_bg_Side p-3 dark:bg-dark_bg_Side">
      <div className="flex w-full items-center justify-center text-light_txt_Main dark:text-dark_txt_Main">
        <SiMusicbrainz className="mr-1 text-2xl" />
        <h2 className="cursor-pointer py-3 px-1 font-Lobster text-xl">Music App</h2>
      </div>

      <div>
        <ul className="flex w-full cursor-pointer flex-col place-items-start gap-2 text-light_txt_Main dark:text-dark_txt_Main">
          {links.map((link, index) => (
            <Link key={index} to={link.path}>
              <li className="flex items-center text-left font-Lemon">
                {link.icon}
                {link.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <DarkModeBtn />
    </div>
  );
}
