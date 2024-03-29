// components
import SongBar from "./SongBar";

export default function RelatedSong({
  song,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  data,
  isFetching,
}) {
  return (
    <div className="flex w-full flex-col">
      <h1 className="mt-2 font-Lemon text-base text-light_txt_Main dark:text-dark_txt_Main">
        Related Song{" "}
      </h1>
      <div className=" flex w-full flex-col px-3">
        {data?.map((song, i) => (
          <SongBar
            key={i}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={() => handlePlayClick(song, i)}
            isFetching={isFetching}
          />
        ))}
      </div>
    </div>
  );
}
