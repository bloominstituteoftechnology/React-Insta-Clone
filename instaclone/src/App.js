import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage.js";
import Authenticate from "./components/Authentication/Authenticate.js";
import Login from "./components/Login/Login";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App)(Login);
