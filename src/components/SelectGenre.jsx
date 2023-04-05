// import React, { useState } from "react";
// import { useGetSongListQuery } from "../redux/services/shazam";

export default function SelectGenre({ dataListGenre, genreTitle, setGenreTitle, isFetching }) {
  //   const { data } = useGetSongListQuery();

  const genres = dataListGenre?.global?.genres;

  //   console.log(genres);

  //   const genreTitle = "pop";
  //   const [genreTitle, setGenreTitle] = useState("pop");
  //   console.log(genreTitle, typeof genreTitle);

  // isFetching = true;
  return (
    <>
      <div className="mt-2 mb-4 flex w-full flex-col  items-center justify-between gap-2 px-2 md:mt-4 md:mb-10 md:flex-row ">
        {isFetching ? (
          <div className=" h-11 w-64 animate-pulse bg-slate-600"></div>
        ) : (
          <div className="flex items-baseline justify-start gap-2 text-left text-3xl  text-white">
            <span className="font-Lemon text-lg md:text-2xl">Discover : </span>
            <p className="font-mono text-xl ">{genreTitle}</p>
          </div>
        )}
        {isFetching ? (
          <div className=" h-11 w-36 animate-pulse bg-slate-600"></div>
        ) : (
          <select
            onChange={(e) => setGenreTitle(e.target.value)}
            value={genreTitle}
            className="self-end rounded-lg bg-slate-500 p-3  text-sm text-black outline-none dark:bg-gray-700 dark:text-gray-300 "
          >
            {genres?.map((genre, i) => (
              <option
                key={i}
                value={genre.listid}
                className="    w-16  bg-slate-900 text-sm text-gray-300  outline-none ring-0"
              >
                {genre.name}
              </option>
            ))}
          </select>
        )}
      </div>
    </>
  );
}
