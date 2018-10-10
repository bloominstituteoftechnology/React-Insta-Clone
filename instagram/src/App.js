import React, { Component } from "react";
import PostsPage from "./components/PostsContainer/PostsPage";
import Authenticate from "./components/Authentication/Authenticate";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default App;
