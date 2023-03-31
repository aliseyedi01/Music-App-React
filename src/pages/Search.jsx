import React from "react";

import { useState } from "react";
import { useSelector } from "react-redux";
import { Error, Loading, Navigation, SearchBar, SongCard } from "../components";
import { useGetSongsBySearchQuery } from "../redux/services/shazam";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const SearchInputHandle = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  //   const searchHandle = () => {
  //     setSearchTerm("");
  //   };

  //   const handleEnterKey = (event) => {
  //     if (event.key === "Enter") {
  //       setSearchTerm("");
  //     }
  //   };

  //   console.log(searchTerm, typeof searchTerm);

  let { data, isFetching, isError } = useGetSongsBySearchQuery(searchTerm);

  //   console.log(data);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
    <div className=" flex h-full flex-col bg-light_bg_Main py-3 pl-5 dark:bg-dark_bg_Main">
      <div className=" flex w-full items-start justify-between px-4">
        <SearchBar
          //   handleEnterKey={handleEnterKey}
          //   searchHandle={searchHandle}
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
      <div className="hide-scrollbar flex h-full w-full items-center justify-center overflow-y-scroll">
        <div className=" flex flex-wrap justify-start  gap-5  ">
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
    </div>
  );
}
