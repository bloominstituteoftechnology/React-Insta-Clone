import React, { Component } from "react";
// import SearchBar from "./components/SearchBar/SearchBar";
import SearchBar from "../SearchBar/SearchBar";
// import PostContainer from "./components/PostContainer/PostContainer";
import PostContainer from "../PostContainer/PostContainer";
// import dummyData from "./dummy-data";
import dummyData from "../../dummy-data";

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      appData: []
      // newComment: {}
    };
  }
  componentDidMount() {
    this.setState({
      appData: dummyData
      // newComment: {
      //   username: "user",
      //   text: ""
      // }
    });
  }

  // addNewComment = (event, i) => {
  //   event.preventDefault();
  //   const comments = this.state.appData[i].comments.slice();
  //   comments.push(this.props.newComment); //NEW
  //   this.setState({
  //     newComment: {
  //       //NEW
  //       username: "user",
  //       text: ""
  //     },
  //     comments: comments
  //   });
  // };

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="container">
          {this.state.appData.map(post => (
            <PostContainer
              key={post.username}
              username={post.username}
              thumbnail={post.thumbnailUrl}
              image={post.imageUrl}
              likes={post.likes}
              timestamp={post.timestamp}
              comments={post.comments}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PostsPage;
