import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/search';
import Posts from './components/PostContainer/posts';
import Comments from './components/CommentSection/comments';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Posts />
        <Comments />
      </div>
    );
  }
}

export default App;
