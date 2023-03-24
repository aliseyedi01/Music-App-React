import "./App.css";
import { Navbar } from "./components";
import Discover from "./pages/Discover";

function App() {
  return (
    <div className="App h-screen w-full bg-white dark:bg-blue-600">
      <Navbar />
      <h2 className=" text-3xl font-bold ">music app react</h2>
      <Discover />
    </div>
  );
}

export default App;
