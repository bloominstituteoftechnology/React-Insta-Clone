import React, { Component } from "react";
import "./App.css";
import postData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      searchPosts: []
    }
  }

  componentDidMount() {
    this.setState({ posts: postData, searchPosts: postData });
  }

  searchPosts = (search) => {
    if (search === "") {
      this.setState({ searchPosts: this.state.posts });
    } else {
      const posts = this.state.posts.filter((post) => post.username.includes(searchWord) );
      this.setState({ searchPosts: posts });
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar search={this.searchPosts} />
        <div>
          {this.state.searchPosts.map((post, i) => <PostContainer key={i} index={i} postData={post} />)}
        </div>
      </div>
    );
  }
}

export default App;
