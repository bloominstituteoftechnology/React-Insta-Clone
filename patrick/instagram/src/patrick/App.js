import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import PostContainer from './PostContainer';
import postData from './application-data.js';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer />
        {/* {postData.map((data, i) => {
          return <PostContainer postData={data} />
        })} */}
      </div>
    )
  }
}

export default App;
