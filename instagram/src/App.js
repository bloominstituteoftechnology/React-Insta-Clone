import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./Components/PostContainer";
import SearchBar from "./Components/SearchBar";
import PostsPage from "./Components/PostsPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // posts: [],
      // likes: 370,
      // filteredPosts: [],
      // filterTarget: ""
    };
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ posts: dummyData });
  //   }, 500);
  // }
  // increment = prevState => {
  //   this.setState(prevState => ({ likes: prevState.likes + 1 }));
  // };

  // handleInput = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  // filter = event => {
  //   this.handleInput(event); // SET STATE CALL HERE DETERMINES this.state.filterTarget go off and do this, and finish when you can
  //   this.setState(prevState => {
  //     const filteredPosts = prevState.posts.filter(post => {
  //       return post.username.includes(prevState.filterTarget);
  //     });
  //     return { filteredPosts: filteredPosts };
  //     // this could be just { filteredPosts }
  //   });
  // };

  render() {
    return (
      <PostsPage />
    );
  }
}

export default App;