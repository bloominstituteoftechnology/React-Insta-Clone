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
      search: "",
      post: [],
      completed: false
    };
  }
  componentDidMount() {
    this.setState({
      post: dummyData
    });
  }
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
    console.log(this.state.completed);
    return (
      <div className="App">
        <PostsPage />
        <header className="App-header">
          <div className="App-header__logo">
            <Icon.Instagram className="logo" />
          </div>
          <div>
            <img
              className="logo__text"
              src={require("./images/logo-instagram.png")}
              alt="instagram logo"
            />
          </div>

          <SearchBar className="search-bar" />
          <a href="#" className="link">
            <Icon.Compass className="link-compass" />
          </a>
          <a href="#" className="link">
            <Icon.Heart className="link-heart" />
          </a>
          <a href="#" className="link">
            <Icon.User className="link-user" />
          </a>
        </header>
        {this.state.post.map(post => (
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
