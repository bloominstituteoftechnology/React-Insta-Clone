import React from "react";

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {};
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
          username: "jdfvr",
          text: this.state.commentField
        });
      }
      return eachPost;
    });
    this.setState({ postList: newPostList, commentField: "" });
  };
  render() {
    return <div>Test</div>;
  }
}

export default PostsPage;
