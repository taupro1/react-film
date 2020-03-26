import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import routesList from "./route/routes.js";

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquare, faPlay, faFilm, faHome, faCalendarPlus, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faFacebookSquare, faPhoneSquare, faPlay, faFilm, faHome, faCalendarPlus, faCalendarAlt);

function App() {
  const showMenuHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => {
        return (<Route key={index} path={route.path} exact={route.exact} component={route.component} />)
      })
    }
  }
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showMenuHome(routesList)}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
