import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  staticUser = {comments: []};
  newComment = 'Add a comment...';
  render() {
    return (
      <div className="App">
        <h1 className="image">
          <img className="instaLogo" src="https://image.freepik.com/free-vector/cool-smiling-hop-brewing-mascot-with-sunglasses-vector-illustration-logo-icon_7688-11.jpg"/><SearchBar />
        </h1>
        <PostContainer dd={dummyData} staticUser={this.staticUser} newComment={this.newComment} />
      </div>
    );
  }
}

export default App;
