import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostsPage from "./components/PostContainer/PostsPage";
import Authenticate from "./components/Authentication/Authenticate";
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      post: [],
      completed: false
    };
  }
  componentDidMount() {
    this.setState({
      post: dummyData,
      searchText: ""
    });
  }
  handleSearch = event => {
    this.setState({
      searchText: event.target.value
    });
    console.log(event.target.value);
  };

  handleLikes = timestamp => {
    // console.log(timestamp);
    let posts = this.state.post.slice();
    posts = posts.map(post => {
      if (post.timestamp === timestamp) {
        let completed = this.state.completed;
        if (completed === false) {
          post.likes = post.likes + 1;
          completed = !completed;
          this.setState({ posts, completed: completed });
          // console.log(completed);
        } else {
          post.likes = post.likes - 1;
          completed = !completed;
          this.setState({ posts, completed: completed });
        }
      }
      return post;
    });
  };
  render() {
    let filtered = this.state.post.filter(post => {
      return post.username.includes(this.state.searchText);
    });
    return (
      <React.Fragment>
        <PostsPage
          filtered={filtered}
          post={this.state.post}
          handleLikes={this.handleLikes}
          completed={this.state.completed}
          searchText={this.state.searchText}
          handleSearch={this.handleSearch}
        />
      </React.Fragment>
    );
  }
}

export default Authenticate(App);
