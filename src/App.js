import { SongDetails, Sidebar, MusicPlayer } from "./components";

import Discover from "./pages/Discover";

function App() {
  return (
    <div className=" flex h-screen w-screen   ">
      <div className="w-[12%]">
        <Sidebar />
      </div>
      <div className="w-[60%]">
        <Discover />
      </div>
      <div className="h-full w-[28%] overflow-y-hidden bg-cyan-800">
        <MusicPlayer />
        <SongDetails />
      </div>
    </div>
  );
}

export default App;
