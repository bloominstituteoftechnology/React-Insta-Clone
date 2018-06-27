import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      postData: dummyData,
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IG APP CLONE</h1>
        </header>
        <SearchBar />
        <PostContainer postData = {this.state.postData}/>        
      </div>
    );
  }
}

export default App;
