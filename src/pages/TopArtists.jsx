import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../components";

import { useGetSongTrackQuery } from "../redux/services/shazam";

export default function TopArtists() {
  const { data } = useGetSongTrackQuery();
  // console.log(data.tracks);
  // console.log(data);

  return (
    <div className="  flex h-full w-full flex-col   bg-light_bg_Main py-3 dark:bg-dark_bg_Main">
      <div className="flex items-center justify-between px-4">
        <h2 className="font-Montserrat text-2xl text-light_txt_Main dark:text-dark_txt_Main ">
          Top Artist
        </h2>
        <Navigation />
      </div>
      <div className="hide-scrollbar grid h-full w-full grid-cols-3 justify-center justify-items-center overflow-y-scroll ">
        {data?.tracks?.map((artist, i) => (
          <Link to={`/artists/${artist?.artists[0].adamid}`}>
            {/* <Link to="/artists/"> */}
            <div key={i} className=" m-4 h-36 w-36 ">
              <div className="h-32 w-32 overflow-hidden rounded-full">
                <img
                  src={artist.images.background}
                  className="transition-ease-in h-32 w-32 transform overflow-hidden rounded-full shadow-md transition-all    duration-700 hover:scale-125   "
                />
              </div>

              <p className=" mt-1 truncate text-center font-Montserrat text-sm font-semibold text-light_txt_Main dark:text-dark_txt_Main">
                {artist.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
