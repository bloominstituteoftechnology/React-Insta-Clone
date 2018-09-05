import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PostsPage from "./components/PostsPage/PostsPage.js";
import Authenticate from "./components/Authentication/Authenticate";
import LoginPage from "./components/LoginPage/Login";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

const HOCApp = Authenticate(App);

return <HOCApp />;

export default App;
