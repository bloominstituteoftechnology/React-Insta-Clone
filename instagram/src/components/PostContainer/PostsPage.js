import React, { Component } from "react";
import PostContainer from "../PostContainer/PostContainer";
import dummyData from "../../dummy-data";
import Fuse from "fuse.js";
import SearchBar from "../SearchBar/SearchBar";
import styled from "styled-components";
import SinglePost from "./Single-Post";
import { Link } from "react-router-dom";

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

  // clickHandler = e => {
  //   console.log(e.target.parentNode.id);
  //   e.target.parentElement.classList.toggle("singlePost");
  //   console.log(e.target.parentElement);
  //   let singlePost = this.state.post;
  //   singlePost = singlePost.filter(
  //     item => item.username === e.target.parentNode.id
  //   );
  //   console.log(singlePost);
  //   this.setState({ singlePost: singlePost });
  //   this.props.history.push("single-post");
  // };

  render() {
    // if (this.state.singlePost.length === 1) {
    //   return <SinglePost post={this.state.singlePost} />;
    // }
    return (
      <AppContainer>
        <SearchBar onChange={this.filterPosts} />
        {(this.state.filtered.length > 0
          ? this.state.filtered
          : this.state.post
        ).map(post => {
          return (
            <PostContainer
              key={post.imageUrl}
              // onClick={this.clickHandler}
              post={post}
            />
          );
        })}
      </AppContainer>
    );
  }
}

export default PostsPage;
