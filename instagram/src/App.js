import React, { Component } from 'react';

import dummyData from './dummy-data.js';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {dummyData.map((post) => {
          return <PostContainer post={post} key={post.timestamp} />;
        })}
      </div>
    );
  }
}

export default App;
