import React, { Component } from "react";
// import dummyData from "./dummy-data";
import "./App.css";
// import PostContainer from "./Components/PostContainer/PostContainer";
// import SearchBarContainer from "./Components/SearchBar/SearchBarContainer";
import PostsPage from './Components/PostContainer/PostsPage.js'
import Login from './Components/Login/Login'
import withAuthenticate from './Components/Authentication/Authenticate'

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }


 

  render() {
    return (
      <div className="App">
        <Comp/>
      </div>
    );
  }
}

const Comp = withAuthenticate(PostsPage)(Login);

export default App;


