import React from "react";
import ReactDOM from "react-dom";
import "./normalize.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import Authenticate from "./components/Authentication/Authenticate";

const AuthApp = Authenticate(App);
ReactDOM.render(<AuthApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
