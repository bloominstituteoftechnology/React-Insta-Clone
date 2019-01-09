import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBar";
import dummyData from "./data/dummy-data";
import Authenticate from "./components/Authentication/Authenticate";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      staticData: [],
      user: "thisUser",
      search: ""
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData, staticData: dummyData });
  }

  searchInput = event => {
    this.setState({
      search: event.target.value
    });
    const searchArray = this.state.staticData;
    /* If search field is empty, show all posts */
    if (this.state.search.length === 0)
      this.setState({ posts: this.state.staticData });
    /* Filters out posts with usernames not including substr this.state.search */ else {
      const resultsArray = searchArray.filter(post => {
        return post.username.includes(this.state.search);
      });
      this.setState({
        posts: resultsArray
      });
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          changeHandler={this.searchInput}
          searchState={this.state.search}
        />
        <PostsPage posts={this.state.posts} user={this.state.user} />
      </div>
    );
  }
}

export default Authenticate(App);
