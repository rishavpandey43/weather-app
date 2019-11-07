import { combineReducers } from "redux";


import selectedCityList from "./selectedCityList";
import mainCityList from "./mainCityList"

const rootReducer = combineReducers({ mainCityList, selectedCityList });

export default rootReducer;
