import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({ posts: dummyData })
  }

  render() {
    return (
      <div className="container">
        <header>
          <div className="instagram-icon-and-logo-container">
            <i className="fab fa-instagram"></i>
            <p>Instagram</p>
          </div>
          <SearchBar />
          <div className="header-icons">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
          </div>
        </header>
        <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
