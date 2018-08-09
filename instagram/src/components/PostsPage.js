import React from "react";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";

class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      postList: [],
      commentField: ""
    };
  }
  componentDidMount() {
    this.setState({ postList: dummyData });
  }

  updateCommentField = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitNewComment = (event, timestamp) => {
    event.preventDefault();
    const newPostList = this.state.postList.map(eachPost => {
      if (eachPost.timestamp === timestamp) {
        eachPost.comments.push({
          username: "Clark Kent",
          text: this.state.commentField
        });
      }
      return eachPost;
    });
    this.setState({ postList: newPostList, commentField: "" });
  };

  render() {
    return (
      <div className="App">
        <PostContainer
          postList={this.state.postList}
          updateCommentField={this.updateCommentField}
          submitNewComment={this.submitNewComment}
          commentField={this.state.commentField}
        />
      </div>
    );
  }
}

export default PostPage;