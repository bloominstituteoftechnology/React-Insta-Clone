import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: dummyData
    }

  }

  render() {
    return (
      <div className="container">

       <SearchBar  />

       <PostContainer posts={this.state.posts}/>)
  
      </div>
    );
  }
}

export default App;
