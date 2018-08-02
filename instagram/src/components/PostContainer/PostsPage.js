import React, { Component } from "react";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

class PostsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: props.posts,

      postFilter: []
    };
  }

  filterHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      } return null;
    });

    this.setState({ postFilter: posts });
  };

  render() {
    console.log('postspage rendering', this.state.posts);
    console.log(this.state.postFilter);
    return (
      <div>
        <SearchBar filterHandler={this.filterHandler} />

        <PostContainer
          posts={
            this.state.postFilter.length > 0
              ? this.state.postFilter
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default PostsPage;
