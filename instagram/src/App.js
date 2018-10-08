import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
//importing dummy-data.js
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data : dummyData,
    };

  } //constructor ends

  render() {
    return (
      <div className="App">
        <h1>WELCOME ************************************* </h1>

        <header className="App-header">
            <SearchBar />
        </header>

        <div>         
          <PostContainer />
        </div>

        <div>         
          <CommentSection />
        </div>
      </div>
    );
  }
}

export default App;
