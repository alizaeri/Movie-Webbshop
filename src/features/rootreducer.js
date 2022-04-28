import { combineReducers } from "redux";
import { reducer as getDataReducer } from "./getdata";

const rootReducer = combineReducers({
    getdata: getDataReducer

});

export {rootReducer} ;