import React from "react";

import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

import dummyData from "../../dummy-data";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: [],
    };
  }

  // componentDidMount with setState
  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }

  // Creating my searchFilter
  searchFilter = e => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div>
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchFilter}
        />

        <PostContainer
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

export default PostsPage;
