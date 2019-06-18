import React, { Component } from "react";
import { Alert, Button } from "reactstrap";
import logo from "./logo.svg";
import "./App.css";
import PostsPage from "./components/PostsPage/PostsPage.js";
import Authenticate from "./components/Authentication/Authenticate";
import LoginPage from "./components/LoginPage/Login";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        {/* Need to call PostsPage before modifiying the component aith Authenticate HOC!!! */}
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
