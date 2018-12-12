import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar className="searchbar-container" />
      </div>
    );
  }
}

export default App;
