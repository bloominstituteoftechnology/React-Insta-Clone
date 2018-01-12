import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import CommentSection from './components/CommentSection/CommentSection.js';


const App = () => {
  return (
    <div>
      <SearchBar />
      {/* Map over imported dummy data. */}
      {/* PostContainer with key, and postData props */}
      {dummyData.map((post,index) => {
        return (
        // returning an instance of post containter
          <PostContainer key={index} postData={post} />
        )
      })}
    </div>
  );
}

export default App;
