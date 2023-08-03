import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

export default function PlayPause({ isPlaying, activeSong, song, handlePause, handlePlay, i }) {
  return (
    <div>
      {isPlaying &&
      activeSong?.attributes?.name === song?.attributes?.name &&
      activeSong?.title === song?.title ? (
        <FaPauseCircle
          size={35}
          className="cursor-pointer text-gray-300"
          onClick={() => handlePause()}
        />
      ) : (
        <FaPlayCircle size={35} className="cursor-pointer text-gray-300" onClick={handlePlay} />
      )}
    </div>
  );
}
