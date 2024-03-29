// react
import { useState } from "react";
// components
import { Error, RelatedSong } from "../components";
// icons
import { BsMusicNoteBeamed, BsMusicNoteList } from "react-icons/bs";
// redux
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../redux/feature/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazam";

export default function SongDetails() {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const songid = activeSong?.key;

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
  const { data: songData, error: errorData } = useGetSongDetailsQuery({ songid });

  // fetch related data
  const { data: relatedData, isFetching: isFetchingSongRelated, error } = useGetSongRelatedQuery();

  // click handle
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, relatedData, i }));
    dispatch(playPause(true));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  // fetch and error handling
  if (error || errorData) return <Error />;

  return (
    <div className=" hide-scrollbar hidden h-full w-full scroll-smooth p-2 text-justify md:block">
      <div className="flex  gap-2 ">
        <BsMusicNoteList
          className="cursor-pointer text-xl text-light_txt_Main dark:text-dark_txt_Main"
          onClick={toggleLyric}
        />
        <BsMusicNoteBeamed
          className=" cursor-pointer  text-xl text-light_txt_Main dark:text-dark_txt_Main"
          onClick={toggleRelated}
        />
      </div>
      <div className="hide-scrollbar h-full w-full overflow-y-scroll">
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
        {showRelated && (
          <RelatedSong
            data={relatedData?.tracks}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            isFetching={isFetchingSongRelated}
          />
        )}
      </div>
    </div>
  );
}
