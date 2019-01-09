import React, { Component } from "react";
import "./App.css";
import PostsPage from './components/PostContainer/PostsPage.js';

import propTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

App.propTypes = { card: propTypes.arrayOf(propTypes.object) };

export default App;
