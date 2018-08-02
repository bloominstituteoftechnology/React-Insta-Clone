import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import Authenticate from "./components/Authentication/Authenticate";
import PostsPage from "./components/PostContainer/PostsPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts:[]
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }
  
  render() {
    console.log('App Rendering', this.state.posts);
    return (
      <div className="container">
        <PostsPage posts={this.state.posts}/>      
      </div>
    );
  }
}



export default Authenticate(App);
