import React, { Component } from "react";
import { render } from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";
// import SearchBar from './SearchBar/SearchBar.js';
import PostContainer from "./components/PostContainer/PostContainer.js";
import CommentSection from "./components/CommentSection/CommentSection.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyList: []
    };
  }

  componentDidMount = () => {
    this.setState({ dummyList: dummyData });
    // console.log(dummyData);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <SearchBar /> */}
        <PostContainer dummy={this.state.dummyList} />
        {/* <CommentSection /> */}
      </div>
    );
  }
}

export default App;
render(<App />, document.getElementById("root"));
