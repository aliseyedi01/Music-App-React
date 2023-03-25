import React from "react";

export default function Seekbar({
  value,
  min,
  max,
  onInput,
  setSeekTime,
  appTime,
}) {
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div className="mt-3 flex w-full items-center justify-center gap-2">
      <p className="text-yellow-400 dark:text-white">
        {value === 0 ? "0:00" : getTime(value)}
      </p>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className=" h-1 w-full rounded-lg  "
      />
      <p className="text-yellow-400 dark:text-white">
        {max === 0 ? "0:00" : getTime(max)}
      </p>
    </div>
  );
}
