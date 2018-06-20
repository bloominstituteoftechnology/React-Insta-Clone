import React, { Component } from "react";
import Authenticate from './Authentication/Authenticate'
import PostsPage from "./components/PostsPage";
import Login from './components/login/Login'
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="App">
            {/* <PostsPage /> */}
            <Login />

    </div>);
  }
}

const AppWithAuthentication = Authenticate(App);

export default AppWithAuthentication;