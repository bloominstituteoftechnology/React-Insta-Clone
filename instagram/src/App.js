import React, { Component } from "react";
import PostPage from "./components/PostContainer/PostPage";
import authenticateHOC from "./components/Authentication/Authenticate";
import LoginPage from "./components/Login/Login";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    );
  }
}

export default authenticateHOC(App)(LoginPage);
