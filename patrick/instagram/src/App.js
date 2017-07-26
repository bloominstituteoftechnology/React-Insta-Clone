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
        {/* <PostContainer /> */}
        {/* {postData.map((data, i) => {
          return <PostContainer postData={data} />
        })} */}
        {postData.map((data, i) => {
          return <PostContainer
                  key={data.imageUrl}
                  thumbnail={data.thumbnailUrl}
                  img={data.imageUrl}
                  username={data.username}
                  comments={data.comments} />
        })}
      </div>
    )
  }
}

export default App;
