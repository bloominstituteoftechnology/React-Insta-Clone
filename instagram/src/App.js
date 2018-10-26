import React, { Component } from 'react';
import './App.css';
import SearchBar from "./Components/SearchBar/SearchBar";
import dummyData from './dummy-data';
import PostSection from './Components/PostSection/PostSection';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts : dummyData
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar/>
        <PostSection posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
