import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from '../src/components/SearchBar/SearchBar';
import PostsContainer from './components/PostsContainer/PostsContainer';

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
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
