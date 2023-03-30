import { useSelector, useDispatch } from "react-redux";
import { Error, Loading, RelatedSong } from "../components";
import { setActiveSong, playPause } from "../redux/feature/playerSlice";
import { useState } from "react";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazam";
import { BsListUl, BsMusicPlayerFill } from "react-icons/bs";

export default function SongDetails() {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const songid = activeSong?.key;
  //   console.log(activeSong);
  // console.log(songid);

  const [showLyric, setShowLyric] = useState(false);
  const [showRelated, setShowRelated] = useState(false);

  const toggleLyric = () => {
    setShowLyric(!showLyric);
    setShowRelated(false);
  };

  const toggleRelated = () => {
    setShowRelated(!showRelated);
    setShowLyric(false);
  };

  // fetch lyrics data
  const { data: songData, isFetching, error: errorData } = useGetSongDetailsQuery({ songid });

  // console.log(songData);

  // const songid1 = "484129036";
  // console.log(songid1, typeof songid1);
  // fetch related data
  const { data: relatedData, isFetching: isFetchingSongRelated, error } = useGetSongRelatedQuery();

  // console.log(relatedData);
  // console.log(error);

  // click handle
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, relatedData, i }));
    dispatch(playPause(true));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  // fetch and error handling
  if (isFetching || isFetchingSongRelated) return <Loading title="Searching song details" />;
  if (error || errorData) return <Error />;

  return (
    <div className=" hide-scrollbar h-full w-full overflow-y-scroll scroll-smooth p-2 text-justify">
      <div className="flex  gap-2 ">
        <BsMusicPlayerFill
          className="cursor-pointer text-xl text-light_txt_Main dark:text-dark_txt_Main"
          onClick={toggleLyric}
        />
        <BsListUl
          className=" cursor-pointer  text-xl text-light_txt_Main dark:text-dark_txt_Main"
          onClick={toggleRelated}
        />
      </div>
      {showLyric && songData?.sections?.[1]?.type === "LYRICS" ? (
        songData?.sections?.[1]?.text.map((line, i) => (
          <p
            key={i}
            className="my-1 font-Ubuntu text-base text-light_txt_Main dark:text-dark_txt_Main "
          >
            {line}
          </p>
        ))
      ) : (
        <p className="my-1 text-base text-light_txt_Main dark:text-dark_txt_Main"></p>
      )}
      <div className="h-full w-full">
        {showRelated && (
          <RelatedSong
            data={relatedData.tracks}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        )}
      </div>
    </div>
  );
}
