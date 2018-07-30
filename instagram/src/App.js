import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'; 
import SearchBar from './components/SearchBar/SearchBar.js'; 
import PostContainer from './components/PostContainer/PostContainer.js'; 


class App extends Component {
  constructor(){
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SearchBar  />
        <PostContainer />
        </header>
        
      </div>
    );
  }
}

export default App;
