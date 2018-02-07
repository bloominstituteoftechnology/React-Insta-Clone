import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar.js';

import PostContainer from './components/PostContainer/PostContainer.js';
import dummyData from './dummy-data.js';

class App extends Component {
  state = {dummyData};
  render() {
    return (
      <div className="App">
        <SearchBar />
        <ul className="PostList">
          {
            this.state.dummyData.map((post, i) => {
              return (
                <PostContainer
                  key={i}
                  username={post.username}
                />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
