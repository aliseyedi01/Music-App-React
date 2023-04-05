// import React, { useState } from "react";
// import { useGetSongListQuery } from "../redux/services/shazam";

import { useState } from "react";

export default function SelectGenre({ dataListGenre, genreTitle, setGenreTitle, isFetching }) {
  //   const { data } = useGetSongListQuery();
  const [textGenre, setTextGenre] = useState("Pop");

  const genres = dataListGenre?.global?.genres;

  function handleGetData(e) {
    console.log(e);
    setGenreTitle(e.target.value);
    setTextGenre(e.target.options[e.target.selectedIndex].textContent);
  }

  console.log(genres);

  //   const genreTitle = "pop";
  //   const [genreTitle, setGenreTitle] = useState("pop");
  console.log("genreID", genreTitle);
  // console.log(genreTitle.name);
  // console.log(genreTitle.id);
  console.log("textGenre", textGenre);

  // isFetching = true;
  return (
    <>
      <div className="mt-2 mb-4 flex w-full flex-col-reverse  items-center justify-between gap-2 px-2 md:mt-4 md:mb-10 md:flex-row ">
        {isFetching ? (
          <div className=" h-11 w-64 animate-pulse place-self-start  bg-slate-600"></div>
        ) : (
          <div className="flex items-baseline justify-start gap-2 place-self-start  text-left text-3xl  text-white">
            <span className="font-Lemon text-xl text-blue-800 dark:text-dark_txt_Main  md:text-2xl">
              Result :
            </span>
            <p className="font-Ubuntu text-lg text-yellow-500 ">{textGenre}</p>
          </div>
        )}
        {isFetching ? (
          <div className=" h-11 w-36 animate-pulse place-self-end bg-slate-600"></div>
        ) : (
          <select
            onChange={handleGetData}
            value={genreTitle}
            className="self-end rounded-lg bg-slate-500 p-3  text-sm text-black outline-none dark:bg-gray-700 dark:text-gray-300 "
          >
            {genres?.map((genre, i) => (
              <option
                key={i}
                value={genre.listid}
                // value={genre.listid}
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
