import React, { Component } from 'react';
import SearchBar from './components/SearchBar/searchBar';
import PostContainer from './components/PostContainer/postContainer';
import CommentSection from './components/CommentSection/commentSection';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }
  render() {
    return (
      <>
        <SearchBar />
        {this.state.data.map(post => {
          return (
            <PostContainer
              thumbnail={post.thumbnailUrl}
              username={post.username}
              imageUrl={post.imageUrl}
              likes={post.likes}
              time={post.timestamp}
              data={this.state.data}
              comments={this.state.data.comments}
            />
          );
        })}
      </>
    );
  }
}

export default App;
