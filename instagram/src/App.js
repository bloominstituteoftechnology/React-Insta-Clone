import React from "react";
// import SearchBar from "./Components/SearchBar/SearchBar";
// import PostList from "./Components/PostContainer/PostList";
import PostPage from "./Components/PostContainer/PostPage";

import PropTypes from "prop-types";

import "./App.css";

// import dummyData from "./dummy-data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPost: [],
      likes: ""
    };
  }

  render() {
    return (
      <div className="App">
        <PostPage />
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
