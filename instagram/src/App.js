import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import Authenticate from "./Authentication/Authenticate";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faComment
} from "./../node_modules/@fortawesome/free-regular-svg-icons";

library.add(faHeart, faComment);

class App extends Component {
  constructor() {
    super();
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

export default Authenticate(App);
