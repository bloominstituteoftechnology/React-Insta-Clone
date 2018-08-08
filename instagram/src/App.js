import React, { Component } from "react";
import "./App.css";
// import PropTypes from "prop-types";
import dummyData from "./dummy-data";
import PostsPage from "./PostContainer/PostsPage";
// import Authenticate from './Authentication/Authentication';
import Login from './Login/Login';
import SearchBar from "./SearchBar/SearchBar";



console.log(dummyData);

// const Authenticate = Authenticate(App);


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Login />
        <SearchBar />
        <PostsPage />
      </div>
    );
  }
}

export default App;
