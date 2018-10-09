import React, { Component } from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {dummyData};
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.dummyData} />
      </div>
    );
  }
}

export default App;