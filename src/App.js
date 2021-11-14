import Navbar from "./components/Navbar/Navbar";
import News from "./components/news/News";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News key="general" category="general"/>
          </Route>
          <Route exact path="/about">
            <div className="text-center">Made By Shinigami</div>
          </Route>
          <Route exact path="/business">
            <News key="business" category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" category="entertainment" />
          </Route>
          <Route exact path="/health">
            <News key="health" category="health" />
          </Route>
          <Route exact path="/science">
            <News key="science" category="science" />
          </Route>
          <Route exact path="/sports">
            <News key="sports" category="sports" />
          </Route>
          <Route exact path="/technology">
            <News key="technolog" category="technology" />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
