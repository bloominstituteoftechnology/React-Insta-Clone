import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar.js';
import PostContainer from './Components/PostContainer/PostContainer.js';
import CommentSection from './Components/CommentSection/CommentSection.js';


class App extends Component {
  constructor() {
    super();

  }

  render() {
    const postContainers = dummyData.map((user, key) => {
      return (
        <div>
          <SearchBar />
          <PostContainer key={key} user={user} />
          <CommentSection />
        </div>
      )
  }
};

export default App;
