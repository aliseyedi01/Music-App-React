import { Loading, SongCard, Error } from "../components";
import { useSelector } from "react-redux";

import { useGetSongTrackQuery } from "../redux/services/shazam";

export default function Discover() {
  const { data, isFetching, error } = useGetSongTrackQuery();

  // console.log(data);

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetching) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="hide-scrollbar h-full w-full overflow-y-scroll bg-white dark:bg-cyan-600">
      <div className="flex flex-wrap justify-center gap-8 p-3 ">
        {data?.tracks.map((song, i) => (
          <SongCard
            key={song.key}
            i={i}
            song={song}
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </div>
    </div>
  );
}
