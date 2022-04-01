import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import word from "./modules/word";

const rootReducer = combineReducers({word});
const middlewares = [thunk];

//리듀서를 하나로 묶은 것 //리듀서 추가방법: {bucket, bucket2, bucket3....}
const enhancer = applyMiddleware(...middlewares); //옵셔널들을 묶은 것

const store = createStore(rootReducer, enhancer); //스토어 생성!

export default store;