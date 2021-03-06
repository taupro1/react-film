import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

// font awesome
import AdminPage from "./pages/admin"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquare, faPlay, faFilm, faHome, faCalendarPlus, faCalendarAlt, faInfoCircle, faStar, faBars, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { routesHome, routesAdmin } from './route/routes.js';
import HomeTemplate from './template/HomeTemplate';
import LottieAnimation from './animation';
import AdminTemplate from './template/AdminTemplate';
library.add(fab, faFacebookSquare, faPhoneSquare, faPlay, faFilm, faHome, faCalendarPlus, faCalendarAlt, faStar, faBars, faCheckCircle, faYoutube, faInfoCircle);



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
        <ScrollUpButton AnimationDuration={1000} style={{ backgroundColor: "white", outline: "none" }} />
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
