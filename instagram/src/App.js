import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }

  filterPosts = event => {
    const posts = this.state.posts.filter(post => {
      if (post.username == event.target.value) {
        return post;
      }
    });
    this.setState({ filteredPosts: posts });
  }

  render() {
    return (
      <div className="App">
        <div>
          <SearchBar filterPostsHandler={this.filterPosts} /> 
        </div>
        <div>
          {this.state.posts.map(post => (
          <PostContainer key={post.timestamp} post={post} addLikeHandler={this.addLike} />
          ) ) } 
        </div>
      </div>
    );
  }
}



export default App;
