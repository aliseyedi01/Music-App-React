import music from "../../assets/image/music.png";

export default function Track({ activeSong }) {
  return (
    <div className="flex w-max flex-1 flex-col items-center justify-start gap-1 md:w-full md:pt-2">
      <div className="flex flex-col gap-2">
        <img
          src={
            activeSong?.images?.coverart ||
            activeSong?.attributes?.artwork?.url.replace(/{w}|{h}/gi, "256") ||
            music
          }
          alt="cover art"
          className="h-16 w-16 rounded md:mt-3 md:h-36 md:w-36"
        />
      </div>
      <div className="hidden w-52 self-center md:block">
        <p className="truncate text-center font-Lemon text-lg  capitalize text-light_txt_Main dark:text-dark_txt_Main">
          {activeSong?.type === "songs"
            ? activeSong?.attributes?.name
            : activeSong?.title || "No active Song"}
        </p>
        <p className="truncate text-center  font-Ubuntu  text-sm capitalize text-light_txt_Main dark:text-dark_txt_Main">
          {activeSong.type === "songs"
            ? activeSong?.attributes?.albumName
            : activeSong?.subtitle || "No active Song"}
        </p>
      </div>
    </div>
  );
}
