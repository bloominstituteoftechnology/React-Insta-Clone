import React, { Component } from "react";
import PostsPage from "./components/PostsContainer/PostsPage";
import "./App.css";
import Authenticate from "./components/Authentication/Authenticate";

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
