import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";
import "./index.css";

import ReduxApp from "./reduxConfig/ReduxApp";
import { Provider } from "react-redux";
import store from "./reduxConfig/store";

import * as serviceWorker from "./serviceWorker";

function MyApp() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ReduxApp></ReduxApp>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
