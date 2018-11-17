import React, { Component } from "react";
import PostContainer from "../PostContainer/PostContainer";
import dummyData from "../../dummy-data";
import Fuse from "fuse.js";
import SearchBar from "../SearchBar/SearchBar";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 100%;
`;

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      filtered: [],
      singlePost: []
    };
  }

  componentDidMount() {
    this.setState({ post: dummyData });
  }

  logout = ev => {
    // ev.preventDefault();
    console.log("done");
    localStorage.removeItem("username");
    window.location.reload();
  };

  filterPosts = ev => {
    var options = {
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 0,
      keys: ["username"]
    };
    var fuse = new Fuse(this.state.post, options); // "list" is the item array
    var result = fuse.search(ev.target.value);
    this.setState({ filtered: result });
  };

  render() {
    return (
      <AppContainer>
        <SearchBar onChange={this.filterPosts} onClick={this.logout} />
        {(this.state.filtered.length > 0
          ? this.state.filtered
          : this.state.post
        ).map(post => (
          <PostContainer
            key={post.imageUrl}
            post={post}
            postId={post.username}
          />
        ))}
      </AppContainer>
    );
  }
}

export default PostsPage;
