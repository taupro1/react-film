import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';


// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquare, faPlay, faFilm, faHome, faCalendarPlus, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import routesHome from './route/routes.js';
import HomeTemplate from './template/HomeTemplate';
library.add(fab, faFacebookSquare, faPhoneSquare, faPlay, faFilm, faHome, faCalendarPlus, faCalendarAlt);



function App() {
  const showMenuHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => {
        return (<HomeTemplate key={index} path={route.path} exact={route.exact} Component={route.component} />)
      })
    }
  }
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showMenuHome(routesHome)}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
