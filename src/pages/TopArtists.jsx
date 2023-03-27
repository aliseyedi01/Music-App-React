import React from "react";
import { useGetSongTrackQuery } from "../redux/services/shazam";

export default function TopArtists() {
  const { data } = useGetSongTrackQuery();
  // console.log(data.tracks);

  return (
    <div className="hide-scrollbar  grid h-full w-full grid-cols-3 justify-center justify-items-center overflow-y-scroll bg-light_bg_Main py-3 dark:bg-dark_bg_Main">
      {data?.tracks?.map((artist, i) => (
        <div key={i} className=" m-4 h-36 w-36">
          <img
            src={artist.images.background}
            className="h-32 w-32 transform overflow-hidden rounded-full opacity-70 shadow-md transition-all duration-150 hover:opacity-100 hover:shadow-amber-300"
          />
          <p className=" truncate text-center text-white">{artist.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
