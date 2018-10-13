import React from "react";
import "./Comments.css";
import * as styled from "./CommentStyles";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      commentInput: "",
      likes: null,
      hasLiked: false
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments,
      likes: this.props.likes
    });
  }

  handleLikes = e => {
    if (!this.state.hasLiked) {
      this.setState(prevState => ({
        likes: prevState.likes + 1,
        hasLiked: true
      }));
    } else {
      this.setState(prevState => ({
        likes: prevState.likes - 1,
        hasLiked: false
      }));
    }
  };

  // comment form handle change
  formChange = e => {
    this.setState({
      commentInput: e.target.value
    });
  };

  // add new comment
  addNewComment = e => {
    e.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          username: localStorage.getItem("user"),
          text: this.state.commentInput
        }
      ],
      commentInput: ""
    });
  };

  render() {
    return (
      <styled.CommentContainer>
        <div className="comment-icons">
          <i
            className={this.state.hasLiked ? "fas fa-heart" : "far fa-heart"}
            onClick={this.handleLikes}
            style={this.state.hasLiked ? { color: "red" } : null}
          />
          <i className="far fa-comment" />
          <i className="far fa-share-square" />
        </div>
        <div className="comments">
          <div className="likes">
            {this.state.likes} <span>likes</span>
          </div>
          <div className="post-comments">
            {this.state.comments.map((comment, i) => (
              <div key={i}>
                <span>{comment.username}</span>
                <span>{comment.text}</span>
              </div>
            ))}
          </div>
          <div className="comment-form">
            <form onSubmit={this.addNewComment}>
              <styled.FormInput
                type="text"
                placeholder="Add a comment..."
                onChange={this.formChange}
                value={this.state.commentInput}
              />
            </form>
          </div>
        </div>
      </styled.CommentContainer>
    );
  }
}

export default Comment;
