import { SongDetails, Sidebar, MusicPlayer } from "./components";
import { Route, Routes } from "react-router-dom";

import { Discover, TopArtists, ArtistDetail, Search, Home } from "./pages";

function App() {
  return (
    <div className=" flex h-screen w-screen   ">
      <div className="w-[12%]">
        <Sidebar />
      </div>
      <div className="w-[60%]">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/search" element={<Search />} />
          <Route path="/top-artists" element={<TopArtists />} />
          <Route path="/artists/:artistsId" element={<ArtistDetail />} />
        </Routes>
      </div>
      <div className="h-full w-[28%] overflow-y-hidden bg-light_bg_Side dark:bg-dark_bg_Side ">
        <MusicPlayer />
        <SongDetails />
      </div>
    </div>
  );
}

export default App;
