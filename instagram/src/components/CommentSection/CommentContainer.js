import React, { Component } from "react";
import "./Comment.css";
import Comment from "./Comment";

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.fred.comments,
      input: "",
      likes: props.fred.likes,
      time: props.fred.timestamp,
      liked: false
    };
  }

  likeToggle = () => {
    let likesCopy = this.state.likes;
    if (this.state.liked === false) {
      likesCopy++;
      this.setState({ likes: likesCopy, liked: true });
    } else {
      likesCopy--;
      this.setState({ likes: likesCopy, liked: false });
    }
  };

  addNewComment = event => {
    if (event.key === "Enter") {
      const commentSlice = this.state.comments.slice();
      commentSlice.push({
        username: "naazzzzzzzz",
        text: this.state.input
      });

      this.setState({ comments: commentSlice });
      this.setState({ input: "" });
    }
  };

  saveComment = event => {
    this.setState({
      input: event.target.value
    });
  };

  render() {
    return (
      <div className="comment-container">
        <div className="icons">
          <i
            className={this.state.liked ? "fas fa-heart" : "far fa-heart"}
            onClick={this.likeToggle}
          />
          <i className="far fa-comment" />
        </div>
        <div className="likes"> {this.state.likes} likes </div>
        <div className="time"> {this.state.timestamp} </div>

        {this.state.comments.map(item => <Comment eye={item} />)}

        <input
          value={this.state.input}
          onChange={this.saveComment}
          onKeyPress={this.addNewComment}
          placeholder="Add a comment..."
        />
        <i className="fa fa-ellipsis-h" aria-hidden="true" />
      </div>
    );
  }
}
export default CommentContainer;
