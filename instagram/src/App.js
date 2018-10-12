import React, { Component } from "react";

import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import LoginPage from "./components/Login/LoginPage";
import Authenticate from "./components/Authentication/Authenticate";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostsPage {...this.state} />
      </div>
    );
  }
}

export default Authenticate(App, LoginPage);
