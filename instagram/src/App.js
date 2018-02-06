import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/search-bar'
import PostContainer from './components/PostContainer/post-container'
// import CommentSection from './components/CommentSection/comment-section.js'

class App extends Component {
  state = {dummyData};

  render() {
    // console.log(this.state.dummyData);
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map((post, i) => {
          return (
          <PostContainer
          key={i}
          post={post}
          />)
        })}
      </div>
    );
  }
}

export default App;
