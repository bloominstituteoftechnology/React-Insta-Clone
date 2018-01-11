import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import CommentSection from './components/CommentSection/CommentSection.js';


class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        {dummyData.map((post,i) => <PostContainer key={i} postData={post} />)}
        {/*<CommentSection comments={}/>*/}
      </div>
    );
  }
}

export default App;
