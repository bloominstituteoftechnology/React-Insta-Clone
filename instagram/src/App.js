import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Header from './components/Header/Header';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  static defaultProps = {
    posts: [],
    newComment: {
      username: 'testUser',
      comment: ''
    }
  };

  state = {
    posts: dummyData
  };

  render() {
    const { posts, newComment } = this.state;
    return (
      <div className="App">
        <Header />
        {posts.map((p, i) => (
          <PostContainer key={i} post={p} newComment={newComment} />
        ))}
      </div>
    );
  }
}

export default App;
