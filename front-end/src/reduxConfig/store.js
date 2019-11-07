import { createStore } from "redux";

import rootReducer from "./reducers/index";

const defaultState = {
  mainCityList: null,
  selectedCityList: []
};

const store = createStore(rootReducer, defaultState);

export default store;
