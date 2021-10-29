import SideBar from "./components/SideBar";
import ContentAboutMe from "./components/ContentAboutMe";

function App() {
  return (
    <div className="App h-screen font-sans text-gray-800">
      <div className="flex flex-row  h-screen">
        <SideBar />
        <ContentAboutMe />
      </div>
    </div>
  );
}

export default App;
