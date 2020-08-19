import React from "react";
import ReactDOM from "react-dom";
import "fontsource-roboto";

import "./index.css";

import inititalizeNetwork from "./util/network";
import App from "./components/App";

inititalizeNetwork();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
