import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        {dummyData.map((post, i) => <PostContainer key={i} post={post} />)}
      </div>
    );
  }
}

export default App;
