import React, { Component } from "react";
import PostsPage from "./components/PostsPage";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <PostsPage />
      </React.Fragment>
    );
  }
}

export default App;
