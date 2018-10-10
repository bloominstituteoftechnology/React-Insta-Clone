import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';
import PostsPage from './components/PostsContainer/PostsPage'

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   posts: [],
    //   filteredPosts: [],
    //   isLoggedIn : false,
    // };
  }
  // componentDidMount() {
  //   this.setState({ posts: dummyData });
  // }
  // searchPostsHandler = e => {
  //   const posts = this.state.posts.filter(p => {
  //     if (p.username.includes(e.target.value)) {
  //       return p;
  //     }
  //   });
  //   this.setState({ filteredPosts: posts });
  // };
  render() {
    return (
      <div className="App">
        {/* <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
        />
        <PostsContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        /> */}
        <PostsPage />
      </div>
    );
  }
}

export default App;
