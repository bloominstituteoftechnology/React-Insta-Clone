import React, { Component } from "react";
// import logo from './logo.svg';
// import PropTypes from 'prop-types';
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <div className="postTray">
          <PostContainer />
        </div>
      </div>
    );
  }
}

export default App;
