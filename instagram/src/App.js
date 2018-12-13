import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="brand">
            <span className="brand__logo">
              <i class="fas fa-camera-retro" />
            </span>
            <span className="brand__line">│</span>
            <span className="brand__title">Instaclone</span>
          </div>
          <SearchBar />
          <i class="far fa-compass" />
          <i class="far fa-heart" />
          <i class="far fa-user" />
        </header>
      </div>
    );
  }
}

export default App;
