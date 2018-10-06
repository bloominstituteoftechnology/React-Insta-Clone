import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from './components/PostContainer/PostContainer'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <SearchBar />
        </header>
        <div className="container">
        <PostContainer />
        </div>
      </div>
    );
  }
}

export default App;
