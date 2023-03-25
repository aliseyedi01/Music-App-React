export default function Track({ activeSong }) {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-start gap-1 pt-2">
      <div className="flex flex-col gap-2">
        <p className="self-start truncate text-left text-sm capitalize text-yellow-400 dark:text-white">
          Now Playing
        </p>
        <img src={activeSong?.images?.coverart} alt="cover art" className="h-36 w-36 rounded" />
      </div>
      <div>
        <p className="truncate text-center text-lg font-bold capitalize text-yellow-400 dark:text-white">
          {activeSong?.title ? activeSong?.title : "No active Song"}
        </p>
        <p className="truncate capitalize text-yellow-400 dark:text-white">
          {activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}
        </p>
      </div>
    </div>
  );
}
