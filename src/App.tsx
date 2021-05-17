import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, Router } from "react-router-dom";
import ArtistSpotlight from "./views/ArtistSpotlight";
import LandingScreen from "./views/LandingScreen";
import SectionScreen from "./views/SectionScreen";
import ArticleScreen from "./views/ArticleScreen";
import history from "./context/history";

function App() {

  useEffect(() => {
    //set localstorage
  })

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <LandingScreen />
          </Route>
          <Route path="/artist-spotlight" exact>
            <ArtistSpotlight />
          </Route>
          <Route path="/the-courts/:sport/:title" exact>
            <ArticleScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
