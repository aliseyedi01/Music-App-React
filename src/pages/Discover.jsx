import { Loading, SongCard, Error } from "../components";

import { useGetSongTrackQuery } from "../redux/services/shazam";

export default function Discover() {
  const { data, isFetching, error } = useGetSongTrackQuery();
  //   console.log(data);

  if (isFetching) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="overflow-y-scroll bg-white dark:bg-cyan-600">
      <div className="flex flex-wrap justify-center gap-8 p-3 ">
        {data?.tracks.map((song, i) => (
          <SongCard key={song.key} i={i} song={song} data={data} />
        ))}
      </div>
    </div>
  );
}
