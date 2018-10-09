import React, { Component } from "react";
import "./App.css";
import dummyData from "../src/dummy-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
      </div>
    );
  }
}

export default App;
