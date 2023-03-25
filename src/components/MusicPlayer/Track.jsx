import React from "react";

export default function Track() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-start gap-1 pt-2">
      <div className="flex flex-col gap-2">
        <p className="self-start truncate text-left text-sm capitalize text-yellow-400 dark:text-white">Now Playing</p>
        <img
          src="https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/e1/f8/88/e1f88885-262a-3c37-6b43-90b6d35f8c99/22UM1IM37104.rgb.jpg/400x400cc.jpg"
          alt="cover art"
          className="h-64 w-64 rounded"
        />
      </div>
      <div>
        <p className="truncate text-lg font-bold capitalize text-yellow-400 dark:text-white">title</p>
        <p className="truncate capitalize text-yellow-400 dark:text-white">subtitle</p>
      </div>
    </div>
  );
}
