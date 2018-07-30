import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'
import  dummyData from "./dummy-data";

class App extends Component {
  constructor(){
    super()
    this.state ={
      dummyData
    }
  }
  render() {
    return (
      <div className="container">
        <SearchBar />
          <PostContainer />
      </div>
    );
  }
}

export default App;
