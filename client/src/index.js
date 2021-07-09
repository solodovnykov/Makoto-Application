import React from "react";
import ReactDOM from "react-dom";
import "./sass/_global.scss";
import "normalize.css";
import { Provider } from "react-redux";

import store from "./store";

import App from "./App";

// const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
