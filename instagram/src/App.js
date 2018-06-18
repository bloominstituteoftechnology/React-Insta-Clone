import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";

class App extends Component {

  constructor() {
    super();
    this.state = {
      postData: dummyData
    };
  }

  render() {
    return (
      <div>
      <SearchBar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PostContainer dummyData={this.state.comments} />
      </div>

    );
  }
}

export default App;
