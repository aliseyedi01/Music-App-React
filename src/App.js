import Sidebar from "./components/Sidebar";
import Discover from "./pages/Discover";

function App() {
  return (
    <div className=" flex h-screen w-screen   ">
      <Sidebar />
      <Discover />
    </div>
  );
}

export default App;
