import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    }
  }

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
                post= {post}
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
