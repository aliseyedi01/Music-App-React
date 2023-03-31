import { SongDetails, Sidebar, MusicPlayer, Loading } from "./components";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const TopArtists = lazy(() => import("./pages/TopArtists"));
const Discover = lazy(() => import("./pages/Discover"));
const Search = lazy(() => import("./pages/Search"));
const ArtistDetail = lazy(() => import("./pages/ArtistDetail"));

function App() {
  return (
    <div className=" relative flex h-screen  w-screen  ">
      <div className="h-full w-[12%]">
        <Sidebar />
      </div>

      <div className="hide-scroll hide-scrollbar  w-[60%] overflow-y-scroll ">
        <Routes>
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/home"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/discover"
            element={
              <Suspense fallback={<Loading />}>
                <Discover />
              </Suspense>
            }
          />
          <Route
            path="/search"
            element={
              <Suspense fallback={<Loading />}>
                <Search />
              </Suspense>
            }
          />
          <Route
            path="/top-artists"
            element={
              <Suspense fallback={<Loading />}>
                <TopArtists />
              </Suspense>
            }
          />
          <Route
            path="/artists/:artistsId"
            element={
              <Suspense fallback={<Loading />}>
                <ArtistDetail />
              </Suspense>
            }
          />
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
