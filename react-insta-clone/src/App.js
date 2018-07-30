import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchComponents/SearchBar";
import PostContainer from "./components/PostComponents/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSet: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar
        />
        <PostContainer
        dataSet = {this.state.dataSet}
        />
      </div>
    );
  }
}

export default App;
