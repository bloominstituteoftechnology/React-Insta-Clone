import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostsPage from "./components/PostsContainer/PostsPage";
import Authenticate from "./components/Authentication/Authenticate";



class App extends Component {
  constructor() {
    console.log('constructor: running');
    super();
    this.state = {
      posts: [],
      search: ""
    };
    console.log('state: running', this.state);
  }

  search = event => {
    event.preventDefault();
    let newPosts = [...this.state.posts];
    newPosts = newPosts.filter(post => {
      if (post.username === this.state.search) {
        return post;
      }
    });
    this.setState({ posts: newPosts });
    event.target.reset();
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  // login = event => {
  //   event.preventDefault();
  //   this.setState({ if() })
  // }
  componentDidMount() {
    console.log('component did mount: running');
    this.setState({ posts: dummyData });
  }
  render() {
    console.log('render: running');
    console.log('render: running', this.state);
    return (
      <div className="App">
        <PostsPage
          search={this.search}
          handleChange={this.handleChange}
          posts={this.state.posts}
        />
      </div>
    );
  }
}

export default Authenticate(App);