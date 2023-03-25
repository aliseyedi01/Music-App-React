import { Track, Controls, Seekbar, Player } from "../MusicPlayer";

export default function MusicPlayer() {
  return (
    <div className="mx-auto  flex w-72 flex-col items-center justify-center  ">
      <Track />
      <Seekbar />
      <Player />
      <Controls />
    </div>
  );
}
