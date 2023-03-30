import music from "../../assets/image/music.png";

export default function Track({ activeSong }) {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-start gap-1 pt-2">
      <div className="flex flex-col gap-2">
        {/* <p className="self-start truncate text-left text-sm capitalize text-light_txt_Main dark:text-dark_txt_Main">
          Now Playing
        </p> */}
        <img
          src={
            activeSong?.images?.coverart ||
            activeSong?.attributes?.artwork?.url.replace(/{w}|{h}/gi, "256") ||
            music
          }
          alt="cover art"
          className="mt-3 h-36 w-36 rounded"
        />
      </div>
      <div>
        <p className="truncate text-center font-Lemon text-lg  capitalize text-light_txt_Main dark:text-dark_txt_Main">
          {activeSong.type === "songs"
            ? activeSong?.attributes?.name
            : activeSong?.title || "No active Song"}
        </p>
        <p className="truncate font-Ubuntu  text-sm capitalize text-light_txt_Main dark:text-dark_txt_Main">
          {activeSong.type === "songs"
            ? activeSong?.attributes?.albumName
            : activeSong?.subtitle || "No active Song"}
        </p>
      </div>
    </div>
  );
}
