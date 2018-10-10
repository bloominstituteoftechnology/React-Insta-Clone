import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostsPage from "./components/PostContainer/PostsPage";
import Auth from "./components/Authentication/Authenticate";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  // component did mount set state
  componentDidMount() {}
  render() {
    if (this.state.loggedIn === false) {
      return <Auth />;
    } else {
      return (
        <div>
          <SearchBar />
          <PostsPage />
        </div>
      );
    }
  }
}

export default App;
