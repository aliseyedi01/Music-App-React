import SongBar from "./SongBar";

export default function RelatedSong({
  song,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  data,
}) {
  // console.log(data);
  return (
    <div className="flex flex-col">
      <h1>Related Song : </h1>
      <div className="mt-2 flex w-full flex-col">
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
          />
        ))}
      </div>
    </div>
  );
}
