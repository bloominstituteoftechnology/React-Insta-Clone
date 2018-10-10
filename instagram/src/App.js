import React from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage.js";
import Authenticate from "./Authentication/Authenticate.js";

const App = props => {
  return (
    <PostsPage
      logoutHandler={props.logoutHandler}
      submitHandler={props.submitHandler}
      userChange={props.userChange}
      passwordChange={props.passwordChange}
    />
  );
};

export default Authenticate(App);
