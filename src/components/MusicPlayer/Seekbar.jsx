import React from "react";

export default function Seekbar() {
  return (
    <div className="mt-3 flex w-full items-center justify-center gap-2">
      <p className="text-yellow-400 dark:text-white">02:25</p>
      <input type="range" min="25" max="100" className=" h-1 w-full rounded-lg  " />
      <p className="text-yellow-400 dark:text-white">07:25</p>
    </div>
  );
}
