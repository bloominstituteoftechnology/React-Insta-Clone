import React from "react";
import "./Comments.css";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      commentInput: "",
      likes: ""
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments,
      likes: this.props.likes
    });
  }

  handleLikes = e => {
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }));
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
      <div className="post-comment-container">
        <div className="comment-icons">
          <i className="far fa-heart" onClick={this.handleLikes} />
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
              <input
                type="text"
                placeholder="Add a comment..."
                onChange={this.formChange}
                value={this.state.commentInput}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
