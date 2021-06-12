import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route, Router } from "react-router-dom";
import ArtistSpotlight from "./views/ArtistSpotlight";
import LandingScreen from "./views/LandingScreen";
import SectionScreen from "./views/SectionScreen";
import ArticleScreen from "./views/ArticleScreen";
import history from "./context/history";
import ArticleContext from "./context/ArticleContext";
import { ThemeProvider } from "styled-components";
import { standard, customTheme } from "./common/themes";

function App() {

  const [invert, setInvert] = useState<boolean>(false)
  const [expandedMenu, setExpandedMenu] = useState<boolean>(false)
  const standardTheme = true;

  useEffect(() => {
    //set localstorage
  })

  return (
    <ArticleContext.Provider
      value={{
        config: null,
        highlightedArticles: [],
        author: "Mena",
        linkedArticles: [],
        title: "Welcome to The DK Fam",
        invert: invert
      }}>
      <ThemeProvider theme={standardTheme ? standard : customTheme}>
        <div className="App">
          <Router history={history}>
            <Switch>
              <Route path="/" exact>
                <LandingScreen expandedMenu={expandedMenu} setExpandedMenu={setExpandedMenu} />
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
      </ThemeProvider>
    </ArticleContext.Provider>
  );
}

export default App;
