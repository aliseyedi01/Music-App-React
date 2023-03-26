import { SongDetails, Sidebar, MusicPlayer } from "./components";
import { Route, Routes } from "react-router-dom";

import { Discover, TopArtists } from "./pages";

function App() {
  return (
    <div className=" flex h-screen w-screen   ">
      <div className="w-[12%]">
        <Sidebar />
      </div>
      <div className="w-[60%]">
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/top-artists" element={<TopArtists />} />
        </Routes>
      </div>
      <div className="h-full w-[28%] overflow-y-hidden bg-cyan-800">
        <MusicPlayer />
        <SongDetails />
      </div>
    </div>
  );
}

export default App;
