import React from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import Authenticate from "./components/Authentication/Authenticate";

function App() {
  return <PostsPage />;
}

export default Authenticate(App);
