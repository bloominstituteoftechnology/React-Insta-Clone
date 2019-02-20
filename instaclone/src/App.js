import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage.js";
import Authenticate from "./components/Authentication/authenticate.js";

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

export default App;
