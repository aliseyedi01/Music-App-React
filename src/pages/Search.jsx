import React from "react";

import { useState } from "react";
import { useSelector } from "react-redux";
import { Error, Navigation, SearchBar, SongCard } from "../components";
import { useGetSongsBySearchQuery } from "../redux/services/shazam";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const SearchInputHandle = (e) => {
    setSearchTerm(e.target.value);
  };

  let { data, isFetching, isError } = useGetSongsBySearchQuery(searchTerm);

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
    <div className=" flex h-full w-full flex-col bg-light_bg_Main py-3 dark:bg-dark_bg_Main md:pl-5">
      <div className=" flex w-full items-start justify-between px-4">
        <SearchBar
          SearchInputHandle={SearchInputHandle}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Navigation />
      </div>
      {isError && (
        <div className="flex items-center justify-between">
          <Error />
        </div>
      )}
      <div className="hide-scrollbar grid  h-full w-full grid-cols-2 place-items-center gap-2  gap-x-3 overflow-y-scroll p-3 md:grid-cols-3">
        {data?.tracks?.hits.map((song, i) => (
          <SongCard
            key={song.track.key}
            song={song.track}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data.tracks}
            i={i}
            isFetching={isFetching}
          />
        ))}
      </div>
    </div>
  );
}
