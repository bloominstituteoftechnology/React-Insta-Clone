import React, { Component } from "react";
import "./App.css";
// import PropTypes from "prop-types";
import dummyData from "./dummy-data";
import PostsPage from "./PostContainer/PostsPage";
import Authenticate from './Authentication/Authentication';
import Login from './Login/Login';
import SearchBar from "./SearchBar/SearchBar";



console.log(dummyData);

const HOCAuthSearch = Authenticate(SearchBar);


class App extends Component {
  // AuthHoc = 
  render() {
    return (
      <div className="App">
        <Login />
        <HOCAuthSearch />
        <PostsPage /> 
      </div>
    );
  }
}

export default App;
