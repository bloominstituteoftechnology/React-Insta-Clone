import React from "react";
import dummyData from "./dummy-data";
import SearchBar from "../SearchBar/SearchBar.js";
import PostContainer from "../PostContainer/PostContainer";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchPosts(event, value) {
    event.preventDefault();
    let posts = this.state.posts.filter(post => post.username === value);
    this.setState({ posts: posts }, console.log(this.state));
  }
  render() {
    return (
      <div className="posts-page">
        <SearchBar searchPosts={this.searchPosts.bind(this)} />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default PostsPage;
