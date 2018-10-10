import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";

import PostsPage from "./components/PostContainer/PostsPage"
import Authenticate from "./components/Authentication/Authenticate";

class App extends Component {
  constructor() {
    super();
    this.state = { 
      data: []
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  logout() {
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("password");
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <PostsPage data={this.state.data} logout={this.logout} />
      </div>
    );
  }
}

export default Authenticate(App);
