import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBar from './Components/SearchBar/SearchBar';
import CommentSection from './Components/CommentSection/CommentSection';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchHandler = event => {};

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header>
            <div className="instaclone-logo">
              <i className="fab fa-instagram" />
              <p>Instagram</p>
            </div>
            <SearchBar searchHandler={this.searchHandler} />
            <div className="social-icons">
              <i className="far fa-compass" />
              <i className="far fa-heart" />
              <i className="far fa-user" />
            </div>
          </header>
          <div className="posts-wrapper">
            <PostContainer data={this.state.posts} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
