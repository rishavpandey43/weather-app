import { combineReducers } from "redux";

import loginInfo from "./loginInfo";
import sidebar from "./sidebar";

const rootReducer = combineReducers({ loginInfo, sidebar });

export default rootReducer;
