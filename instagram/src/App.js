import React, { Component } from "react";
import moment from "moment";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./css/main.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      newCommentText: "",
      liked: {}
    };
  }

  componentDidMount() {
    // There might be a more succinct way to do this, but the following turns the timestamp string from dummyData into Unix Epoch Time (while leaving the other data alone). Earlier I had just edited dummy-data.js, so this is more elegant.
    const data = dummyData.map(post => {
      return (post = {
        username: post.username,
        thumbnailUrl: post.thumbnailUrl,
        imageUrl: post.imageUrl,
        likes: post.likes,
        timestamp: moment(post.timestamp, "MMMM Do YYYY, h:mm:ss a").valueOf(),
        comments: post.comments
      });
    });

    this.setState({
      data: data
    });
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addNewComment = (e, timestamp) => {
    e.preventDefault();
    const newComment = {
      // We haven't really worked out the username of the commenter, so I hardcoded this one for now:
      username: "catslanderer",
      text: this.state.newCommentText
    };
    // Finds index of the post that was commented on:
    const postIndex = this.state.data.findIndex(
      post => post.timestamp === timestamp
    );
    // Sets up tempData to update nested state:
    const tempData = { ...this.state.data };
    // Pushes new comment to comment array:
    tempData[postIndex].comments.push(newComment);
    // Updates state to include new comment and clears the comment form:
    this.setState({
      tempData,
      newCommentText: ""
    });
  };

  addNewLike = (e, timestamp) => {
    e.preventDefault();
    // Finds index of the post that was liked:
    const postIndex = this.state.data.findIndex(
      post => post.timestamp === timestamp
    );
    // Sets up tempData to update nested state:
    let tempData = { ...this.state.data };
    let tempLiked = this.state.liked;
    // If post not already liked, then a like is added:
    if (!this.state.liked[timestamp]) {
      // Increments likes by 1:
      tempData[postIndex].likes += 1;
      tempLiked[timestamp] = true;
      // Updates state to include new like total and marks the post as already liked:
      this.setState({
        tempData,
        tempLiked
      });
      // If post already liked, then a like is taken away:
    } else if (this.state.liked[timestamp]) {
      // Dencrements likes by 1:
      tempData[postIndex].likes -= 1;
      tempLiked[timestamp] = false;
      // Updates state to include new like total and marks the post as already liked:
      this.setState({
        tempData,
        tempLiked
      });
    }
  };

  render() {
    console.log(this.state.liked);
    return (
      <div className="container">
        <header className="header">
          <SearchBar changeHandler={this.changeHandler} />
        </header>
        <PostContainer
          posts={this.state.data}
          addNewLike={this.addNewLike}
          newCommentText={this.state.newCommentText}
          changeHandler={this.changeHandler}
          addNewComment={this.addNewComment}
        />
      </div>
    );
  }
}

export default App;
