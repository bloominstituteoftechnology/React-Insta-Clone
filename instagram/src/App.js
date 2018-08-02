import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage"
import Authenticate from "./components/Authentication/Authenticate"


// Searchbar and PostContainer are children of App Component
// App Component holds the state of the dummyData
// if this.setState is called then
// for search add  this to state object here.....filteredPosts: []

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  
  render() {
    return (
      <div>
       <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
