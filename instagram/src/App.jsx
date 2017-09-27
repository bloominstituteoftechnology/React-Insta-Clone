import React, { Component } from 'react';
import Post from './Post';
import postData from './application-data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {postData.map((post, index) => {
          return (
            <Post username={post.username} profileImage={post.thumbnailUrl} postImage={post.imageUrl} likes={post.likes} comments={post.comments} key={index}/>
          );
        })}
      </div>
    );
  }
}

export default App;
