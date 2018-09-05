import React, { Component } from 'react';
import SearchBar from "../SearchBar/SearchBarContainer";
import PostsContainer from "./PostsContainer";


class PostPage extends Component {
   constructor() {
        super();
        this.state = {
          posts: [],
          filteredPosts: []
        };
      }

    

render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
        />
        <PostsContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default PostPage;