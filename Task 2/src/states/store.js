// redux/store.js
import { applyMiddleware, createStore } from "redux";
import userReducer from "./reducer";
import { thunk } from "redux-thunk";

const store = createStore(userReducer, {}, applyMiddleware(thunk));

export default store;
