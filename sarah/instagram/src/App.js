import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import PostContainer from './PostContainer';
import postData from './application-data.js';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        {postData.map((data, i) => {
          return <PostContainer key={data.imageUrl} postData={data} />
        })} 
      </div>
    )
  }
}

export default App;
