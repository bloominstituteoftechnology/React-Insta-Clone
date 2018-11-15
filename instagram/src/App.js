import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import * as Icon from "react-feather";
import PostsPage from "./components/PostContainer/PostsPage";
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
    });
  };
  render() {
    let filtered = this.state.post.filter(post => {
      return post.username.includes(this.state.searchText);
    });
    console.log(filtered);

    return (
      <div className="App">
        <header className="App-header">
          <Icon.Instagram className="logo" />
          <img
            className="logo__text"
            src={require("./images/logo-instagram.png")}
            alt="instagram logo"
          />
          <SearchBar
            className="search-bar"
            searchText={this.state.searchText}
            handleSearch={this.handleSearch}
          />
          <Icon.Compass className="link-compass" />
          <Icon.Heart className="link-heart" />
          <Icon.User className="link-user" />
        </header>
        {filtered.map(post => (
          <PostContainer
            key={post.timestamp}
            post={post}
            handlelikesprop={this.handleLikes}
            completedProp={this.state.completed}
          />
        ))}
      </div>
    );
  }
}

export default App;
