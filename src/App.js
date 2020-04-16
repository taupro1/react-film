import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

// font awesome
import AdminPage from "./pages/admin"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquare, faPlay, faFilm, faHome, faCalendarPlus, faCalendarAlt, faStar, faBars, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { routesHome, routesAdmin } from './route/routes.js';
import HomeTemplate from './template/HomeTemplate';
import LottieAnimation from './animation';
import AdminTemplate from './template/AdminTemplate';
library.add(fab, faFacebookSquare, faPhoneSquare, faPlay, faFilm, faHome, faCalendarPlus, faCalendarAlt, faStar, faBars, faCheckCircle);



function App() {
  const showMenuHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => {
        return (<HomeTemplate key={index} path={route.path} exact={route.exact} Component={route.component} />)
      })
    }
  }
  const showAdminHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((route, index) => {
        return (<AdminTemplate key={index} path={route.path} exact={route.exact} Component={route.component} />)
      })
    }
  }
  return (
    <BrowserRouter>
      <Fragment>
        <Suspense fallback={<LottieAnimation />}>
          <Switch>
            {showMenuHome(routesHome)}
            {showAdminHome(routesAdmin)}
            <Route to="/admin" exact component={AdminPage} />
          </Switch>
        </Suspense>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
