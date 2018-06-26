import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-Data";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <PostContainer />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Nothing</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
