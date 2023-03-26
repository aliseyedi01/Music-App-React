import { useSelector, useDispatch } from "react-redux";

import { Error, Loading } from "../components";

import { setActiveSong, playPause } from "../redux/feature/playerSlice";

import { useGetSongDetailsQuery } from "../redux/services/shazam";

export default function SongDetails() {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const songid = activeSong.key;
  //   console.log(activeSong);
  //   console.log(songid);

  const {
    data: songData,
    isFetching,
    error,
  } = useGetSongDetailsQuery({ songid });

  console.log(songData);

  if (isFetching) return <Loading title="Searching song details" />;
  if (error) return <Error />;
  return (
    <div className=" hide-scrollbar h-full w-full overflow-y-scroll scroll-smooth p-2 text-justify">
      {songData?.sections?.[1]?.type === "LYRICS" ? (
        songData?.sections?.[1]?.text.map((line, i) => (
          <p
            key={i}
            className="my-1 text-base text-yellow-400 dark:text-white "
          >
            {line}
          </p>
        ))
      ) : (
        <p className="my-1 text-base text-gray-400">
          Sorry, no lyrics found...
        </p>
      )}
    </div>
  );
}
