import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import './App.css';
import dummyData from './dummy-data';

class App extends Component {
  render() {
    return (
      <div className="app__container">
        <SearchBar />
        <div>
          {dummyData.map((post) => {
            return (
              <div>
                <PostContainer
                  key={post.username}
                  post={post}
                />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
