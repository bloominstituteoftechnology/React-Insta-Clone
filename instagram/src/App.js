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
      posts: dummyData
    }
  }
  render() {
    return (
      <div className="container">
        <SearchBar />
          <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
