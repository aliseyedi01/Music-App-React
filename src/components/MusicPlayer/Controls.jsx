// react
import { useState } from "react";
// icons
import {
  BsArrowRepeat,
  BsFillSkipEndFill,
  BsFillPauseFill,
  BsFillPlayFill,
  BsFillSkipStartFill,
  BsShuffle,
  BsHeart,
  BsFillHeartFill,
} from "react-icons/bs";
// components
import VolumeBar from "./VolumeBar";

export default function Controls({
  isPlaying,
  repeat,
  value,
  setVolume,
  setRepeat,
  shuffle,
  setShuffle,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) {
  const [showFavorites, setShowFavorites] = useState(true);

  const handleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div className="flex w-full flex-row-reverse items-center md:my-3 md:flex-col md:justify-center md:gap-5">
      {/* above btn */}
      <div className="flex w-full items-center justify-between gap-4 px-2 text-xl text-light_txt_Main dark:text-dark_txt_Main md:gap-2">
        <BsArrowRepeat
          className={`cursor-pointer ${
            repeat
              ? "text-red-600 dark:text-orange-800"
              : "text-light_txt_Main dark:text-dark_txt_Main"
          }`}
          onClick={() => setRepeat((prev) => !prev)}
        />
        <BsFillSkipStartFill className="cursor-pointer" onClick={handlePrevSong} />
        {/* play and pause */}
        {isPlaying ? (
          <BsFillPauseFill className="cursor-pointer" onClick={handlePlayPause} />
        ) : (
          <BsFillPlayFill className="cursor-pointer" onClick={handlePlayPause} />
        )}
        <BsFillSkipEndFill className="cursor-pointer" onClick={handleNextSong} />
        <BsShuffle
          className={`cursor-pointer ${
            shuffle
              ? "text-red-600 dark:text-orange-800"
              : "text-light_txt_Main dark:text-dark_txt_Main"
          }`}
          onClick={() => setShuffle((prev) => !prev)}
        />
      </div>

      {/* down btn */}
      <div className="flex w-full items-center justify-around px-4 py-2">
        <div className="hidden items-center gap-3 md:flex">
          {showFavorites ? (
            <BsFillHeartFill
              className="cursor-pointer text-xl text-light_txt_Main dark:text-dark_txt_Main"
              onClick={handleFavorites}
            />
          ) : (
            <BsHeart
              className="cursor-pointer text-xl text-light_txt_Main dark:text-dark_txt_Main"
              onClick={handleFavorites}
            />
          )}
        </div>
        <VolumeBar
          value={value}
          min="0"
          max="1"
          onChange={(event) => setVolume(event.target.value)}
          setVolume={setVolume}
        />
      </div>
    </div>
  );
}
