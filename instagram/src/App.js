import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer';
import SearchBar from './components/SearchBar';
import PostsPage from './components/PostsPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({posts: dummyData})
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer posts={this.state.posts} />
        <PostsPage />
      </div>
    );
  }
}

export default App;
