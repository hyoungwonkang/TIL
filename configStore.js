import {createStore, combineReducers } from "redux";
import bucket from "./modules/bucket";
// import bucket22 from "./modules/bucket";

const rootReducer = combineReducers({bucket});      // bucket22가 있다면 combineReducers({bucket, bucket22})

const store = createStore(rootReducer);

export default store;