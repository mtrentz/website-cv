import SideBar from "./components/SideBar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App h-screen font-sans">
      <div className="flex flex-row  h-screen">
        <SideBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
