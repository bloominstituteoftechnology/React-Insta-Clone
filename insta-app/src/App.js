import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Components.css';
import dummyData from './dummy-data'; 
import SearchBar from './components/Search Bar/SearchBar'; 
import PostContainer from './components/Post Container/PostContainer'; 


class App extends Component {
  constructor(){
    super(); 
  }
  render() {
    return (
      <div className="app-container">
      <SearchBar /> 
      <PostContainer />
      </div>
    );
  }
}

export default App;
