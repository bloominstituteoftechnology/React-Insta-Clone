import React, { Component } from 'react';
import logo from './logo.svg';
import CommentSection from './Components/CommentSection/CommentSection.js'
import PostContainer from './Components/PostContainer/PostContainer.js'
import SearchBar from './Components/SearchBar/SearchBar.js'
import dummyData from './dummy-data.js'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      Post: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        <PostContainer dummyData={this.state.Post}/>
      </div>
    );
  }
}

export default App;
