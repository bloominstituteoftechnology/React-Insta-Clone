import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import Header from './Components/SearchBar/Header';
import './Reset.css';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
      {this.state.data.map(data => {
        return (
          <PostContainer 
          username={data.username} 
          thumbnailUrl={data.thumbnailUrl}
          imageUrl={data.imageUrl}
          likes={data.likes}
          comments={data.comments}
          />
        )
      })}
      </div>
    );
  }
}

export default App;
