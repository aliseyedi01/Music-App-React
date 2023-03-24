import SongCard from "../components/SongCard";

import { useGetSongTrackQuery } from "../redux/services/shazam";

export default function Discover() {
  const { data, isFetching, error } = useGetSongTrackQuery();
  //   console.log(data);
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8 p-3 ">
        {data?.tracks.map((song, i) => (
          <SongCard key={song.key} i={i} song={song} data={data} />
        ))}
      </div>
    </div>
  );
}
