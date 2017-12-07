import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-Wrapper">
        <SearchBar />
        {dummyData.map((datum, index) => <PostContainer key={index} datum={datum} id={index}/>)}
      </div>
      </div>
    );
  }
}

export default App;
