import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBarContainer';
import PostsContainer from './components/PostsContainer/PostsContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  searchPosts = (event) => {
    event.preventDefault();

    let filteredPosts = this.state.posts;
    filteredPosts = filteredPosts.filter(post => {
      return post.username.toLowerCase() === event.target.value
    });

    this.setState({ filteredPosts });
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchPosts={this.searchPosts} />
        <PostsContainer posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts} />
      </div>
    );
  }
}

export default App;