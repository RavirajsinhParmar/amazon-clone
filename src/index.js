import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./Reducer";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
