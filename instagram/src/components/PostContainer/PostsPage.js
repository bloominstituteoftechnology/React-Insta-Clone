import React from "react";
import PostsContainer from "./PostsContainer";
import SearchBar from "../SearchBar/SearchBar";
import dummyData from '../../dummy-data';
import '../../App.css';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData }); // initialize state with data
  }

  searchPostsHandler = e => {
    const filteredPosts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: filteredPosts });
  };

  render() {
    return (
      <div>
        <SearchBar searchPosts={this.searchPostsHandler} />
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

export default PostsPage;
