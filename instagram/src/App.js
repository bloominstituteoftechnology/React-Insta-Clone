import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
      // comments: dummyData.map(comment => comment.comments)
    });
    // console.log(dummyData.map(comment => comment.comments));
  }
  render() {
    const posts = this.state.posts;
    return (
      <div>
        <SearchBar />
        {posts.map((post, i) => (
          <PostContainer
            key={i}
            // posts={this.state.posts}
            post={post}
          />
        ))}
      </div>
    );
  }
}

export default App;
