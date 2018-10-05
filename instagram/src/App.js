import React, { Component } from "react";
import "./App.css";
import logo from "./img/ig-logo.png";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/Search Bar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="logo-container">
            <img src={logo} className="logo" />
            <p className="title">Fake Instagram</p>
          </div>
          <SearchBar />
        </header>
        <div>
          <div className="post-container">
            <PostContainer dummyData={this.state.dummyData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
