import React from "react";
import ReactDOM from "react-dom";
import "./sass/_global.scss";
import "normalize.css";
import { HashRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <HashRouter basename="/">
    <App />
  </HashRouter>,

  document.getElementById("root")
);
