import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Searchbar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({posts: dummyData})
  }

  render() {
    return (
      <div>
        <Searchbar />
        <PostsPage posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
