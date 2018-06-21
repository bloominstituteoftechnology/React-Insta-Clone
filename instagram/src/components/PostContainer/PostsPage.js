import React, {Component} from 'react';

import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import dummyData from "./../../dummy-data";
import {TheApp} from '../Reusables/Reusables';

class PostsPage extends Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: [],
      postData: dummyData,
    };
  }
  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  inputSearch = event => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(event.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <TheApp>
      <SearchBar 
      searchTerm={this.state.searchTerm}
      searchPosts={this.searchPostsHandler}
      />
      {this.state.posts.map(post => (
          <PostContainer post={post} key={Math.random()} />
        ))}
      </TheApp>

    );
  }
}

export default PostsPage;