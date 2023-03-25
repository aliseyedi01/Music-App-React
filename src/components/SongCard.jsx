import { useDispatch } from "react-redux";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { playPause, setActiveSong } from "../redux/feature/playerSlice";

export default function SongCard({ song, i, data, isPlaying, activeSong }) {
  console.log(song);
  const dispatch = useDispatch();
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <div className="flex h-full w-[200px] cursor-pointer flex-col rounded-lg bg-white bg-opacity-80 p-3 shadow-2xl  backdrop-blur-sm dark:bg-blue-700">
      <div className="group relative  w-full">
        {/* button on image */}
        <div className="absolute inset-0 hidden items-center justify-center bg-black bg-opacity-50  group-hover:flex">
          {!isPlaying && activeSong?.title === song?.title ? (
            <FaPauseCircle
              className="text-2xl text-gray-300"
              onClick={handlePauseClick}
            />
          ) : (
            <FaPlayCircle
              className="text-2xl text-gray-300"
              onClick={handlePlayClick}
            />
          )}
        </div>
        <img src={song?.images?.coverart} className="rounded" alt="song_Img" />
      </div>
      <div className="mt-4 flex flex-col text-left">
        <p className="truncate text-lg font-semibold capitalize text-zinc-700 dark:text-white ">
          {song?.title}
        </p>
        <p className="mt-1 truncate text-sm capitalize text-zinc-700 dark:text-gray-300">
          {song?.subtitle}
        </p>
      </div>
    </div>
  );
}
