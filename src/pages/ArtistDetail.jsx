import React from "react";
import { useParams } from "react-router-dom";
import { Navigation, RelatedSong } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../redux/feature/playerSlice";

import { useGetArtistDetailsQuery, useGetArtistTopSongsQuery } from "../redux/services/shazam";

export default function ArtistDetail() {
  let { artistsId } = useParams();

  const {
    data,
    isError,
    isFetching: isFetchingArtistDetails,
  } = useGetArtistDetailsQuery({ artistsId });
  let artist = data?.data[0]?.attributes;

  const { data: artistSong, isFetching: isFetchingArtistTopSong } = useGetArtistTopSongsQuery({
    artistsId,
  });

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="hide-scrollbar relative  flex h-full w-full flex-col overflow-y-scroll  bg-light_bg_Main py-3 text-red-300 dark:bg-dark_bg_Main">
      <div className="absolute right-2 top-3">
        <Navigation />
      </div>
      <div className="   ml-6 mt-6 flex h-60  w-full gap-3">
        <div>
          {isFetchingArtistDetails ? (
            <div className="h-48 w-48 animate-pulse rounded bg-slate-600"></div>
          ) : (
            <img
              src={artist?.artwork?.url.replace(/{w}|{h}/gi, "256")}
              // alt={artist?.name}
              className="h-48 w-48 rounded "
            />
          )}
        </div>
        <div className=" flex flex-col justify-center ">
          {isFetchingArtistDetails ? (
            <div className="h-8 w-48 animate-pulse rounded bg-slate-600"></div>
          ) : (
            <h1 className="text-2xl text-gray-50">{artist?.name}</h1>
          )}
          {isFetchingArtistDetails ? (
            <div className="mt-2 h-8 w-48 animate-pulse rounded bg-slate-600"></div>
          ) : (
            <h2 className="text-lg text-gray-400">{artist?.genreNames?.[0]}</h2>
          )}
        </div>
      </div>
      <div className="w-full">
        <h2 className="p-4 text-justify font-Ubuntu">
          Nigerian singer Burna Boy opened his Apple Music Up Next spotlight with a distinction:
          “Music’s supposed to be a universal language. You understanding what I’m saying is second.
          The primary thing is, what does the person inside you hear?” It’s a simple but radical
          thought: You can listen on your terms, but he doesn’t have to meet you halfway. Born in
          1991 and raised on the southern coast of Nigeria before moving to London for college.
        </h2>
      </div>
      <div className="hide-scrollbar ml-2 h-full w-full overflow-y-scroll  scroll-smooth ">
        <RelatedSong
          artistId={artistsId}
          data={artistSong?.data}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
          isFetching={isFetchingArtistDetails}
        />
      </div>
    </div>
  );
}
