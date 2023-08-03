import { SongCard, SelectGenre } from "../components";
import { useSelector } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useGetSongListQuery, useGetSongsByGenreQuery } from "../redux/services/shazam";
import { useState } from "react";

export default function Discover() {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: dataListGenre, isFetching: isFetchingListQuery } = useGetSongListQuery();
  const [genreTitle, setGenreTitle] = useState("genre-global-chart-1");

  const {
    data: dataGenre,
    isFetching: isFetchingSongByGenre,
    error: errorGenre,
    isLoading: loadingGenre,
  } = useGetSongsByGenreQuery(genreTitle);

  return (
    <div className=" h-full w-full   bg-light_bg_Main py-3 dark:bg-dark_bg_Main">
      <SelectGenre
        dataListGenre={dataListGenre}
        genreTitle={genreTitle}
        setGenreTitle={setGenreTitle}
        isFetching={isFetchingListQuery}
      />
      <Scrollbars
        autoHide
        autoHideTimeout={3000}
        autoHideDuration={500}
        thumbMinSize={10}
        thumbSize={150}
        renderThumbVertical={({ style, ...props }) => (
          <div
            className=" rounded-md bg-indigo-500 hover:bg-indigo-600 dark:bg-gray-400 dark:hover:bg-gray-500"
            style={{ ...style }}
            {...props}
          />
        )}
      >
        <div className=" grid  grid-cols-2 place-items-center gap-4 p-2 md:grid-cols-3 md:gap-8 ">
          {dataGenre?.tracks.map((song, i) => (
            <SongCard
              key={song.key}
              i={i}
              song={song}
              data={dataGenre}
              isPlaying={isPlaying}
              activeSong={activeSong}
              isFetching={isFetchingSongByGenre}
              errorGenre={errorGenre}
              loadingGenre={loadingGenre}
            />
          ))}
        </div>
      </Scrollbars>
    </div>
  );
}
