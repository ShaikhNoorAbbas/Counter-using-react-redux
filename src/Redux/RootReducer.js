import { combineReducers } from "redux";
import CounterReducer from "./ReducerLogic";

const rootReducer = combineReducers({ CounterReducer });

export default rootReducer;