import React, { Component } from "react";
import './App.css';
import PostsPage from "./components/PostContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBar";
import Authenticate from "./components/Authentication/Authenticate";

const SearchBarAuth = Authenticate(SearchBar);


class App extends Component {
  AuthHOC = Authenticate;
  render() {
    return (
      <div className="App">
      <SearchBarAuth />
      <PostsPage/>
    </div>
    )
  }
}

export default App;