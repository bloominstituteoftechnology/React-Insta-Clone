import React, { Component } from "react";

import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import Authenticate from "./Authentication/Authenticate";

Authenticate(App);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default App;
