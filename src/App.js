import React, { Component } from "react";
import "./App.css";
import dummyData from "../src/dummy-data";
import PostsPage from "./components/PostContainer/PostsPage"
import Authenticate from "./components/Authentication/Authenticate"

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: dummyData });
    }, 84);
  }


  render() {
    return (
      <PostsPage 
      data={this.state.data}
      />
    );
  }
}

export default Authenticate(App);