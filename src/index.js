import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
