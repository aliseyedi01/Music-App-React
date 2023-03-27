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
}) {
  // console.log(artistId);
  return (
    <div className="mt-3 flex w-full flex-row items-center ">
      <h3 className="mr-2 text-base font-bold text-light_txt_Main dark:text-dark_txt_Main">
        {i + 1} .
      </h3>
      <div className="flex flex-1 flex-row items-center justify-between">
        <img
          className="h-16 w-16 rounded-lg"
          src={
            artistId
              ? song?.attributes?.artwork?.url
                  .replace("{w}", "125")
                  .replace("{h}", "125")
              : song?.images?.coverart
          }
          alt={song?.title}
        />
        <div className="mx-2 flex flex-1 flex-col justify-center">
          {/* {!artistId ? (
            <Link to={`/songs/${song.key}`}>
              <p className="text-xl font-bold text-white">{song?.title}</p>
            </Link>
          ) : (
            <p className="text-xl font-bold text-white">
              {song?.attributes?.name}
            </p>
          )} */}
          <p className="text-xl font-bold text-light_txt_Main dark:text-dark_txt_Main">
            {song?.attributes?.name}
          </p>
          <p className="mt-1 text-base text-light_txt_Main dark:text-dark_txt_Main">
            {artistId ? song?.attributes?.albumName : song?.subtitle}
          </p>
        </div>
      </div>
      {!artistId ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          i={i}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      ) : null}
    </div>
  );
}
