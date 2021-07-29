import React from 'react';
import {Switch , Route} from "react-router-dom";
import NavComponent from './components/nav-component';
import HomeComponent from './components/home-component';
import AboutComponent from './components/about-component';
import IntroductComponent from './components/introduct-component';

const App = () => {
  return (
    <div>
      <NavComponent />
      <switch>
        <Route path="/" exact>
          <HomeComponent />
        </Route>
        <Route path="/about" exact>
          <AboutComponent />
        </Route>
        <Route path="/introduct" exact>
          <IntroductComponent />
        </Route>
      </switch>
    </div>
  );
};

export default App;
