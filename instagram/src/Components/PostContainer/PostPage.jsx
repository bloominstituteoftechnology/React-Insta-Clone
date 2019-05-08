import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PostList from "../PostContainer/PostList";

import dummyData from "../../dummy-data";

class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPost: [],
      likes: ""
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
    console.log("CDM happened");
  }

  searchPostsHandler = event => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPost: posts });
  };

  render() {
    return (
      <div>
        <SearchBar 
            searchPostsHandler={this.searchPostsHandler} />
        <PostList
          posts={
              this.state.filteredPost.length > 0 
              ? this.state.filteredPost 
              : this.state.posts
            }
        />
      </div>
    );
  }
}

export default PostPage;
