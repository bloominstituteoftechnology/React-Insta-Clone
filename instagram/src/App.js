import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import dummyData from './data/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.posts.map((post) => <PostContainer post={post} />)}
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        }))
    })
  )
}

export default App;
