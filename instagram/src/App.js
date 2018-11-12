import React, { Component } from 'react';

//Component Import
import SearchBar from './components/SearchBar/searchbar';
import PostContainer from './components/PostContainer/postcontainer';
import CommentSection from './components/CommentSection/commentsection';

//css
import './App.css';

class App extends Component {
  render() {
    return (
      <div>Test
      <SearchBar />
      <PostContainer />
      <CommentSection />
      </div>
    );
  }
}

export default App;
