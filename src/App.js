import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import ContentAboutMe from "./components/ContentAboutMe";
import ContentProjects from './components/ContentProjects';
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App h-screen font-sans text-gray-800 text-lg md:text-xl 2xl:text-2xl">

      {/* Se eu fizer a sidebar ir pro top pra mobile no SideBar.js, aqui faço o normal como flex-col e o md: como flex-row */}
      {/* TODO: Aqui qnd eu colocar mais rotas preciso lembrar de que o root tem que redirecionar pro EDUCATION */}
      <div className="flex flex-row  h-screen">
        <Router>
          <SideBar />

          <Switch>
            <Route exact path="/">
              <Redirect exact to="/aboutme/education" />
            </Route>
            <Route path="/aboutme">
              <ContentAboutMe/>
            </Route>
            <Route path="/projects">
              <ContentProjects/>
            </Route>
          </Switch>

        </Router>
      </div>
    </div>
  );
}

export default App;
