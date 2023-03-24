import { FaPlayCircle } from "react-icons/fa";

export default function SongCard() {
  return (
    <div className="flex h-full w-[200px] cursor-pointer flex-col rounded-lg bg-white bg-opacity-80 p-3 shadow-2xl  backdrop-blur-sm dark:bg-blue-700">
      <div className="group relative  w-full">
        <div className="absolute inset-0 hidden items-center justify-center bg-black bg-opacity-50  group-hover:flex">
          <FaPlayCircle className="text-2xl text-gray-300" />
        </div>
        <img
          src="https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/e1/f8/88/e1f88885-262a-3c37-6b43-90b6d35f8c99/22UM1IM37104.rgb.jpg/400x400cc.jpg"
          className="rounded"
          alt="song_Img"
        />
      </div>
      <div className="mt-4 flex flex-col text-left">
        <p className="truncate text-lg font-semibold capitalize text-zinc-700 dark:text-white ">song title</p>
        <p className="mt-1 truncate text-sm capitalize text-zinc-700 dark:text-gray-300">song artists</p>
      </div>
    </div>
  );
}
