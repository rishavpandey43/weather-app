import React from "react";
import { Route, Switch,  } from "react-router-dom";

import Home from "./components/Home/home";
import AddCity from "./components/AddCity/addCity";

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
    </Switch>
  );
}

export default Routes;
