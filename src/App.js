import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './SearchBar/SearchBar';
import PostContainer from './PostContainer/PostContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dummyData: dummyData
    };
  }

 

  render() {
    
    return (
      <div className="App">
        <SearchBar />
        <div className="posts" >{this.state.dummyData.map(item => <PostContainer item={item} comments={item.comments} username={item.username} thumbnail={item.imageUrl} userthumbnail={item.thumbnailUrl} likes={item.likes} />)}</div>
        
      </div>
    );
    
  }
}

export default App;
