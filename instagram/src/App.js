import React, { Component } from "react";
import "./App.css";
import Authenticate from "./components/Authentication/Authenticate";
import PostsPage from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login";
import SinglePost from "./components/PostContainer/SinglePost";
import { Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import {
  faComment,
  faHeart,
  faUser,
  faCompass,
  faTimesCircle
} from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH, faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(
  faInstagram,
  faComment,
  faHeart,
  faUser,
  faCompass,
  faEllipsisH,
  faSearch,
  faTimesCircle
);

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/posts" component={PostsPage} />} />
          <Route path="/posts/:username" component={SinglePost} />
        </Switch>
      </>
    );
  }
}

export default Authenticate(App)(Login);
