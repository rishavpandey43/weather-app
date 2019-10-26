import { createStore } from "redux";

import rootReducer from "./reducers/index";

const defaultState = {
  loginInfo: {},
  sidebar: {}
};

const store = createStore(rootReducer, defaultState);

export default store;
