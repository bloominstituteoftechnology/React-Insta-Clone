import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';


class App extends Component {
  constructor() {
    super();
    this.state={
      postData: dummyData
    }
  
  }
  render() {
    return (
      <div className='main-page'>
        <SearchBar />
        <div className='posts-container'>
          {this.state.postData.map(post=>(
            <PostContainer
              post = {post}
            />  
          ))};
        </div>
      </div>
    );
  }
}

export default App;
