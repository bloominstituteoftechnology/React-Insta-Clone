import React, { Component } from 'react';
import './App.css';
import dummyData from  './dummy-data';
import PostsContainer from './components/PostContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';

//posts: [] renders the posts
//searchedPosts: [] sets up for displaying search results
class App extends Component {
  constructor () {
    super();
    this.state = {
      posts: [],
      searchedPosts: []
    };
  }

  //puts dumy data on state
  componentDidMount() {
    this.setState({ posts: dummyData });
  }

//Write a function for post search bar
searchPostsHandler = elem => {
  const posts = this.state.posts.filter(post => {
    if (post.username.includes(elem.target.value)) {
      return post;
    }
  });
  this.setState({ searchedPosts: posts });
};
  
  //pulls down posts from state on class App so it will render
  //same deal for SearchBar
  render() {
    return (
      <div className="App">
      <SearchBar 
        searchTerm={this.state.searchTerm}
        searchPosts={this.state.searchPostsHandler}
      />
      <PostsContainer posts={            
              this.state.searchedPosts.length > 0
              ? this.state.searchedPosts
              : this.state.posts} />
      </div>
    )
  }
}

export default App;
