import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";
import posts from "./reducers/posts";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("profile")
      ? JSON.parse(localStorage.getItem("profile"))
      : null,
  },
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({ posts: posts, userSignin: authReducer });

const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
