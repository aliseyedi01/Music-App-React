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

  const { data: dataListGenre } = useGetSongListQuery();
  const [genreTitle, setGenreTitle] = useState("genre-global-chart-1");

  const {
    data: dataGenre,
    isFetching: fetchGenre,
    error: errorGenre,
  } = useGetSongsByGenreQuery(genreTitle);

  // console.log(genreTitle);
  console.log(dataGenre);

  if (fetchGenre) return <Loading />;
  if (errorGenre) return <Error />;

  return (
    <div className="hide-scrollbar h-full w-full overflow-y-scroll bg-light_bg_Main py-3 dark:bg-dark_bg_Main">
      <SelectGenre
        dataListGenre={dataListGenre}
        genreTitle={genreTitle}
        setGenreTitle={setGenreTitle}
      />
      <div className="flex flex-wrap justify-center gap-8 p-3 ">
        {dataGenre?.tracks.map((song, i) => (
          <SongCard
            key={song.key}
            i={i}
            song={song}
            data={dataGenre}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </div>
    </div>
  );
}
