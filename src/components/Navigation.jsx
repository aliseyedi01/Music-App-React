import React from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

import { useNavigate } from "react-router-dom";

export default function Navigate() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center gap-1   p-2 ">
      <button
        className=" cursor-pointer  text-3xl font-bold text-light_txt_Main dark:text-dark_txt_Main "
        onClick={() => navigate(-1)}
        title="Back"
      >
        <HiArrowCircleLeft />
      </button>
      <button
        className="cursor-pointer text-3xl font-bold  text-light_txt_Main  dark:text-dark_txt_Main "
        onClick={() => navigate(+1)}
        title="Forward"
      >
        <HiArrowCircleRight />
      </button>
    </div>
  );
}
