import React, { Component } from "react";
import "./App.css";
import logo from "./img/ig-logo.png";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/Search Bar/SearchBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faCompass, faHeart, faUser);

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
            <img src={logo} className="logo" alt="logo" />
            <p className="title">Fake Instagram</p>
          </div>
          <SearchBar />
          <div className="icon-container">
            <FontAwesomeIcon icon="compass" className="icon" />
            <FontAwesomeIcon icon="heart" className="icon" />
            <FontAwesomeIcon icon="user" className="icon" />
          </div>
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
