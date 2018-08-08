import React, { Component } from "react";
import "./App.css";
// import PropTypes from "prop-types";
import dummyData from "./dummy-data";
import PostsPage from "./PostContainer/PostsPage";
// import Authenticate from './Authentication/Authentication';


console.log(dummyData);

// const Authenticate = Authenticate(App);







class App extends Component {
  
  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default App;
