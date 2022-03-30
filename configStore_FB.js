import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import bucket from "./modules/bucket";

// import bucket22 from "./modules/bucket";

const middlewares = [thunk];
const rootReducer = combineReducers({bucket});      // bucket22가 있다면 combineReducers({bucket, bucket22})
const enhancer = applyMiddleware(...middlewares)        // ...middlewares=미들웨어들 풀어해쳐서 넣는다. 하지만 여기선 thunk만 넣어도 된다. 하나니까

const store = createStore(rootReducer, enhancer);       // 리덕스 공식문서 복붙 가능

export default store;