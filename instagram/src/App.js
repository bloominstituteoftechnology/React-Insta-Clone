import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PostsPage from "./components/PostsPage/PostsPage.js";
import Authenticate from "./components/Authentication/Authenticate";

class App extends Component {
  constructor() {
    super();
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
