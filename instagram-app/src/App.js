import React, { Component } from "react";
// import dummyData from "./dummy-data";
import "./App.css";
// import PostContainer from "./Components/PostContainer/PostContainer";
// import SearchBarContainer from "./Components/SearchBar/SearchBarContainer";
import PostsPage from './Components/PostContainer/PostsPage.js'

class App extends Component {
  state = {};
    

 

  render() {
    return (
      <div className="App">
        <PostsPage/>
      </div>
    );
  }
}

export default App;


