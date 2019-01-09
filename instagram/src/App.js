import React, { Component } from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import dummyData from "./dummy-data";
import Authenticate from "./components/Authentication/Authenticate";
import "./App.css";
import Posts from "./components/Posts/Posts";

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   posts: [],
    //   search: [],
    //   comments: []
    // };
  }
  // liked = (e, i) => {
  //   let array = this.state.posts;
  //   array[i].likes += 1;
  //   this.setState({
  //     posts: array
  //   });
  // };
  // sort = text => {
  //   let array = this.state.posts;
  //   let newArray;
  //   if (text.length != "") {
  //     newArray = array.filter(e => {
  //       return e.username.includes(text);
  //     });
  //   } else {
  //     newArray = array;
  //   }
  //   this.setState({
  //     search: newArray
  //   });
  // };
  // componentDidMount() {
  //   this.setState({
  //     posts: dummyData.map(e => {
  //       return {
  //         username: e.username,
  //         thumbnailUrl: e.thumbnailUrl,
  //         imageUrl: e.imageUrl,
  //         likes: e.likes,
  //         timestamp: e.timestamp
  //       };
  //     }),
  //     search: this.state.posts,
  //     comments: dummyData.map(e => {
  //       return e.comments;
  //     })
  //   });
  // }
  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
