import { Loading, SongCard, Error, SelectGenre } from "../components";
import { useSelector } from "react-redux";

import {
  useGetSongListQuery,
  useGetSongsByGenreQuery,
  useGetSongTrackQuery,
} from "../redux/services/shazam";
import { useState } from "react";

export default function Discover() {
  // const { data, isFetching, error } = useGetSongTrackQuery();
  // console.log(data);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: dataListGenre, isFetching: isFetchingListQuery } = useGetSongListQuery();
  const [genreTitle, setGenreTitle] = useState("genre-global-chart-1");

  const {
    data: dataGenre,
    isFetching: isFetchingSongByGenre,
    error: errorGenre,
    isLoading: loadingGenre,
  } = useGetSongsByGenreQuery(genreTitle);

  // console.log(loadingGenre);
  // console.log(isFetchingSongByGenre);

  // if (isFetchingSongByGenre) return <Loading />;
  // if (errorGenre) return <Error />;

  return (
    <div className="hide-scrollbar h-full w-full  overflow-y-scroll bg-light_bg_Main py-3 dark:bg-dark_bg_Main">
      <SelectGenre
        dataListGenre={dataListGenre}
        genreTitle={genreTitle}
        setGenreTitle={setGenreTitle}
        isFetching={isFetchingListQuery}
      />
      <div className=" grid  grid-cols-2 gap-4 p-3 md:grid-cols-3 md:gap-8 ">
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
    </div>
  );
}
