import React, { Component } from 'react';
import './App.css';
import CommentsSection from './components/CommentsSection/CommentsSection';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component {
  render() {
    return (
      <div className="App">

        <SearchBar />
        <PostContainer />
        <CommentsSection />
      </div>
    );
  }
}

export default App;
