import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login";
import authenticate from "./Authentication/Authenticate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        {/* <ShowConditionally isLoggedIn={this.state.isLoggedIn} /> */}
        {/* <PostsPage /> */}

        {/* <header className="App-header">
          <SearchBar />
        </header>
        <PostContainer data={this.state.data} key={Math.random()} /> */}
      </div>
    );
  }
}

const enhancedApp = authenticate(App);

export default enhancedApp;
