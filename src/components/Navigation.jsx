import React from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";

export default function Navigate() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center gap-1 p-2">
      <Tooltip
        id="back"
        place="bottom"
        className="z-40 !transform !rounded-xl !bg-red-600 font-Ubuntu font-bold !text-white !transition-all !duration-300 hover:bg-yellow-400"
      />
      <button
        className="cursor-pointer text-3xl font-bold text-light_txt_Main dark:text-dark_txt_Main"
        onClick={() => navigate(-1)}
        data-tooltip-id="back"
        data-tooltip-content="Back"
      >
        <HiArrowCircleLeft />
      </button>
      <button
        className="cursor-pointer text-3xl font-bold text-light_txt_Main dark:text-dark_txt_Main"
        onClick={() => navigate(+1)}
        data-tooltip-id="back"
        data-tooltip-content="Forward"
      >
        <HiArrowCircleRight />
      </button>
    </div>
  );
}
