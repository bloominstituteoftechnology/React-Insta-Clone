import React, { Component } from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import Login from './components/Login/Login'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      validated: false
    }
  }

  render() {
    return (
      <div className="App">
        <Authenticate validated={this.state.validated}>
          <PostsPage
            filteredPosts={this.state.filteredPosts}
            posts={this.state.posts}
          />
        </Authenticate>
      </div>
    );
  }
}

const Authenticate = props => {
  return props.validated ? (
    <div>{props.children}</div>
  ) : (
    <Login />
  );
};

export default App;
