import React, { Component } from "react";
import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostsContainer from "./PostsContainer";

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      // creating an empty array to pass through posts data
      posts: [],
      //creating an empty array to pass through filtered posts data
      filteredPosts: []
    };
  }

  // Part of the component life cycle and mounnting dummy data to posts
  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  // creating an event handler to enable the search function
  searchPostsHandler = event => {
    // filtering through posts array
    const posts = this.state.posts.filter(post => {
      // shows only the post that include the certain target value
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
    // passing in the filtered posts into the filtered posts array
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div className="App">
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
