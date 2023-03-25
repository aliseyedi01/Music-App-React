import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Sidebar from "./components/Sidebar";
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
      <div className="h-full w-[28%] bg-cyan-800">
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
