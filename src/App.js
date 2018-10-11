import React, { Component } from "react";
import Authenticate from "./Authentication/Authenticate";

import PostsPage from "./instagram/PostContainer/PostsPage";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  logoutHandler = event => {
    // event.preventDefault();
    console.log("logoutHandlerFired");
    window.localStorage.setItem("login", "");
    window.localStorage.setItem("password", "");
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        <PostsPage logoutHandler={this.logoutHandler} />
      </div>
    );
  }
}

export default Authenticate(App);
