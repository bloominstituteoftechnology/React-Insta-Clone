import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import Authentication from "./components/Authentication/Authenticate";

const AppAuth = Authentication(PostsPage);

function App() {
  return (
    <div className="App">
      <AppAuth />
    </div>
  );
}

export default App;

