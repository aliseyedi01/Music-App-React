// react
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// component
import { SongDetails, Sidebar, MusicPlayer, Loading, NavBottom } from "./components";
// Custom hooks
import useMediaQuery from "./hooks/useMediaQuery";

const Home = lazy(() => import("./pages/Home"));
const TopArtists = lazy(() => import("./pages/TopArtists"));
const Discover = lazy(() => import("./pages/Discover"));
const Search = lazy(() => import("./pages/Search"));
const ArtistDetail = lazy(() => import("./pages/ArtistDetail"));

const routes = [
  { path: "*", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/discover", element: <Discover /> },
  { path: "/search", element: <Search /> },
  { path: "/top-artists", element: <TopArtists /> },
  { path: "/artists/:artistsId", element: <ArtistDetail /> },
];

function App() {
  const isMobile = useMediaQuery("(max-width: 576px)");
  return (
    <div className="relative flex h-screen w-screen">
      <NavBottom />
      <div className="hidden h-full w-4/6 md:block md:w-[12%]">
        <Sidebar />
      </div>
      <div className="hide-scroll hide-scrollbar z-20 w-full overflow-y-scroll md:w-[60%] ">
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<Suspense fallback={<Loading />}>{route.element}</Suspense>}
            />
          ))}
        </Routes>
      </div>
      <div
        className={
          isMobile
            ? "absolute bottom-10 z-40 w-full overflow-y-hidden"
            : "h-full w-[28%] overflow-y-hidden bg-light_bg_Side dark:bg-dark_bg_Side "
        }
      >
        <MusicPlayer />
        <SongDetails />
      </div>
    </div>
  );
}

export default App;
