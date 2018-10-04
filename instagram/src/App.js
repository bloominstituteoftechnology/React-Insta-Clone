import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostListContainer from './components/PostListContainer/PostListContainer.js';


class App extends Component {

  constructor(){
    super();
    this.state = {
      postData: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        {/* <h1>Instagram App</h1> */}
        <SearchBar />
        <PostListContainer />
      </div>
    );
  }
}

export default App;
