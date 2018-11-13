import React, { Component } from 'react';
import './App.css';

// import data
import dummyData from './dummy-data'

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData,
    };
  }
  render() {
    console.log(dummyData);
    return (
      <div className="App">
        <SearchBar />
        <div className="posts--container">
          <div className="posts">
            {
              this.state.data.map(
                post => <PostContainer key={post.username + post.timestamp} post={post}/>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
