import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login";
import Authenticate from "./Authentication/Authenticate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
      <div className="App">
        {/* <ShowConditionally isLoggedIn={this.state.isLoggedIn} /> */}
        {/* <PostsPage /> */}
        <Login />
        {/* <header className="App-header">
          <SearchBar />
        </header>
        <PostContainer data={this.state.data} key={Math.random()} /> */}
      </div>
    );
  }
}

const ShowConditionally = Authenticate(App);

export default App;
