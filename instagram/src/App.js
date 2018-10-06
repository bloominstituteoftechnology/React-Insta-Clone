import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import dummyData from './dummy-data.js';

class App extends Component {
    state = {
        dummyData: dummyData,
    }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map((obj, index)   =>  {
            return  <PostContainer timestamp={obj.timestamp} thumbnail={obj.thumbnailUrl} image={obj.imageUrl} username={obj.username} likes={obj.likes} comments={obj.comments} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
