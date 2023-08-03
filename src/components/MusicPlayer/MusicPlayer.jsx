import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Track, Controls, Seekbar, Player } from "../MusicPlayer";
import { nextSong, prevSong, playPause } from "../../redux/feature/playerSlice";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function MusicPlayer() {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useSelector(
    (state) => state.player,
  );

  const isMobile = useMediaQuery("(max-width: 576px)");

  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSongs?.length) dispatch(playPause(true));
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(false));

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs?.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };

  return (
    <div className="mx-auto flex w-full  flex-col items-center justify-center  md:w-72   ">
      {isMobile && (
        <div className="h-max w-full py-1  text-red-400 backdrop-blur-3xl">
          <div className="mx-3 flex flex-row items-center justify-between ">
            <div className="">
              <Track activeSong={activeSong} />
            </div>
            <div className="w-4/5">
              <Seekbar
                value={appTime}
                min="0"
                max={duration}
                onInput={(event) => setSeekTime(event.target.value)}
                setSeekTime={setSeekTime}
                appTime={appTime}
              />
              <Player
                activeSong={activeSong}
                volume={volume}
                isPlaying={isPlaying}
                seekTime={seekTime}
                repeat={repeat}
                currentIndex={currentIndex}
                onEnded={handleNextSong}
                onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
                onLoadedData={(event) => setDuration(event.target.duration)}
              />
              <Controls
                isPlaying={isPlaying}
                isActive={isActive}
                repeat={repeat}
                setRepeat={setRepeat}
                shuffle={shuffle}
                setShuffle={setShuffle}
                currentSongs={currentSongs}
                handlePlayPause={handlePlayPause}
                handlePrevSong={handlePrevSong}
                handleNextSong={handleNextSong}
                onChange={(event) => setVolume(event.target.value)}
                setVolume={setVolume}
                value={volume}
              />
            </div>
          </div>
        </div>
      )}
      {!isMobile && (
        <div>
          <Track activeSong={activeSong} />
          <Seekbar
            value={appTime}
            min="0"
            max={duration}
            onInput={(event) => setSeekTime(event.target.value)}
            setSeekTime={setSeekTime}
            appTime={appTime}
          />
          <Player
            activeSong={activeSong}
            volume={volume}
            isPlaying={isPlaying}
            seekTime={seekTime}
            repeat={repeat}
            currentIndex={currentIndex}
            onEnded={handleNextSong}
            onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
            onLoadedData={(event) => setDuration(event.target.duration)}
          />
          <Controls
            isPlaying={isPlaying}
            // activeSong={activeSong}
            isActive={isActive}
            repeat={repeat}
            setRepeat={setRepeat}
            shuffle={shuffle}
            setShuffle={setShuffle}
            currentSongs={currentSongs}
            handlePlayPause={handlePlayPause}
            handlePrevSong={handlePrevSong}
            handleNextSong={handleNextSong}
            onChange={(event) => setVolume(event.target.value)}
            setVolume={setVolume}
            value={volume}
          />
        </div>
      )}
    </div>
  );
}
