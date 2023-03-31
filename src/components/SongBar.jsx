import React from "react";
import PlayPause from "./PlayPause";
// import { Link } from "react-router-dom";

export default function SongBar({
  song,
  i,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  isFetching,
}) {
  // isFetching = true;
  console.log(isFetching);
  return (
    <div className="mt-3 flex w-full items-center justify-evenly ">
      <h3 className="mr-2 text-base font-bold text-light_txt_Main dark:text-dark_txt_Main">
        {i + 1} .
      </h3>
      <div className="flex flex-1 flex-row items-center justify-between">
        {isFetching ? (
          <div className="h-16 w-16 animate-pulse rounded-lg bg-slate-800"></div>
        ) : (
          <img
            className="h-16 w-16 rounded-lg"
            src={
              artistId
                ? song?.attributes?.artwork?.url.replace("{w}", "125").replace("{h}", "125")
                : song?.images?.coverart
            }
            alt={song?.title}
          />
        )}
        <div className="mx-2 flex flex-1 flex-col justify-center">
          {isFetching ? (
            <div className="h-6 w-4/6 animate-pulse bg-slate-700"></div>
          ) : (
            <p className="  w-4/6 truncate font-serif  text-base font-bold text-light_txt_Main dark:text-dark_txt_Main">
              {song?.attributes?.name}
            </p>
          )}
          {isFetching ? (
            <div className="mt-1 h-6 w-2/6 animate-pulse bg-slate-700"></div>
          ) : (
            <p className="mt-1 truncate font-Lobster text-sm tracking-wide  text-light_txt_Main dark:text-amber-700">
              {artistId ? song?.attributes?.albumName : song?.subtitle}
            </p>
          )}
        </div>
      </div>
      {isFetching ? (
        <div className="h-8 w-8 animate-pulse rounded-full bg-slate-600"></div>
      ) : (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          i={i}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      )}
    </div>
  );
}
