import { useDispatch } from "react-redux";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { playPause, setActiveSong } from "../redux/feature/playerSlice";
import { useEffect, useState } from "react";
import DefaultPlayMusic from "../../src/assets/image/defaultPlay.jpg";

export default function SongCard({ song, i, data, isPlaying, activeSong, isFetching }) {
  const dispatch = useDispatch();

  const [imageLoadingStates, setImageLoadingStates] = useState(
    data?.tracks ? Object.fromEntries(data.tracks.map((artist, i) => [i, true])) : {}
  );

  useEffect(() => {
    setImageLoadingStates((prev) => ({ ...prev, [i]: true }));
  }, []);

  // play and pause button
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handleImageLoad = (i) => {
    setImageLoadingStates((prev) => ({ ...prev, [i]: false }));
  };

  // console.log("isFetching ", isFetching);
  // console.log("loading", imageLoadingStates);
  // console.log("i", i);
  // console.log("data?.tracks", data?.tracks);

  return (
    <div className="flex h-full w-[9.8rem] cursor-pointer flex-col rounded-lg bg-light_bg_Main bg-opacity-80 p-3 py-3 shadow-2xl backdrop-blur-sm dark:bg-dark_bg_Second  md:w-max ">
      <div className="group relative  w-full">
        {/* button */}
        <div
          className={`absolute inset-0 items-center  justify-center bg-gray-800 bg-opacity-50 group-hover:flex    ${
            activeSong?.title === song.title ? "flex bg-gray-800 bg-opacity-70" : "hidden"
          }`}
        >
          {isPlaying && activeSong?.title === song?.title ? (
            <FaPauseCircle
              className="  text-xl text-gray-300 dark:text-blue-400 md:text-3xl"
              onClick={handlePauseClick}
            />
          ) : (
            <FaPlayCircle
              className=" animate-ping text-3xl text-gray-300 dark:text-blue-400"
              onClick={handlePlayClick}
            />
          )}
        </div>
        {/* imaage music */}
        <img
          src={!imageLoadingStates[i] && !isFetching ? song?.images?.coverart : DefaultPlayMusic}
          className="h-32 w-32 rounded md:h-44 md:w-44"
          alt="song_Img"
          onLoad={() => handleImageLoad(i)}
        />
      </div>
      {/* title and subtitle */}
      <div className="mt-4 flex flex-col text-left">
        {isFetching ? (
          <div className="h-4 w-32 animate-pulse truncate  rounded-sm bg-slate-600 md:w-40"></div>
        ) : (
          <p className="h-5 w-32 truncate font-Ubuntu text-base font-semibold  capitalize text-zinc-700 dark:text-white md:h-8 md:w-44 md:text-lg ">
            {song?.title}
          </p>
        )}
        {isFetching ? (
          <div className="mt-1  h-4 w-24 animate-pulse rounded-sm bg-slate-600 md:w-40"></div>
        ) : (
          <p className="mt-1 mb-1 h-4 w-24 truncate  font-Montserrat text-xs  capitalize text-zinc-700 dark:text-gray-300 md:text-sm">
            {song?.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
