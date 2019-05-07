import React from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import PostList from "./Components/PostContainer/PostList";

import PropTypes from "prop-types";

import "./App.css";

import dummyData from "./dummy-data";

class App extends React.Component {
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
    console.log(this.state.posts);
    return (
      <div className="App">
        <SearchBar searchPostsHandler={this.searchPostsHandler} />
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

App.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string
      // comments: PropTypes.arrayOf(
      //    PropTypes.string
      // )
    })
  )
};

export default App;
