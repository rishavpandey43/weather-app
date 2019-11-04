import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home/home";
import AddCity from "./components/AddCity/addCity";
import CityDetail from './components/cityDetail/cityDetail';

function Routes(mainProps) {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => <Home {...props} {...mainProps} />}
      ></Route>
      <Route
        exact
        path="/add"
        render={props => <AddCity {...props} {...mainProps} />}
      ></Route>
      <Route
        exact
        path="/detail"
        render={props => <CityDetail {...props} {...mainProps} />}
      ></Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
