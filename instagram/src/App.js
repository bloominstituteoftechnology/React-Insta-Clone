import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <hr />
        {dummyData.map((post, i) => {
          return <PostContainer key={i} postInfo={post} />;
        })}
      </div>
    );
  }
}

export default App;
