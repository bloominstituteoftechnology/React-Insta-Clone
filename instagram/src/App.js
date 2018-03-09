import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App bg-light">
      <SearchBar />
      {dummyData.map((post, index) =>  {
        return (
       <PostContainer key={index} post={post} />
        )
      })}
      </div>
    );
  }
}

export default App;
