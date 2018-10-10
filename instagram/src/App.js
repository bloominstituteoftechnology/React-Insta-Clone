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

  render() {
    return (
      <div className="App">
        <PostsPage data={this.state.data} />
      </div>
    );
  }
}

export default Authenticate(App);
