import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthHOC from "./AuthHOC";
import AuthForm from "./AuthForm";
import "./index.css";

const WrappedApp = AuthHOC(AuthForm)(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<WrappedApp />, rootElement);
