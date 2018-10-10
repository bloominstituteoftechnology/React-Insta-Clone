import React from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage.js";
import Authenticate from "./Authentication/Authenticate.js";
const App = () => {
  return <PostsPage />;
};

export default Authenticate(App);
