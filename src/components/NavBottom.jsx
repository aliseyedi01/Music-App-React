import React from "react";
import { HiHome, HiSearchCircle, HiUserGroup, HiViewGrid } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function NavBottom() {
  return (
    <div className=" text-grey-200 absolute bottom-0 left-0  z-50  block h-10 w-full bg-opacity-30 text-xl text-light_bg_Side  backdrop-blur-2xl md:hidden">
      <div className="flex h-9 w-full items-center justify-between bg-dark_bg_Side bg-opacity-30 px-2 text-lime-800 backdrop-blur-lg dark:text-orange-500  ">
        <NavLink to="/">
          <HiHome className="" />
        </NavLink>
        <NavLink to="/discover">
          <HiViewGrid className="" />
        </NavLink>
        <NavLink to="/search">
          <HiSearchCircle className="" />
        </NavLink>
        <NavLink to="/top-artists">
          <HiUserGroup className="" />
        </NavLink>
      </div>
    </div>
  );
}
