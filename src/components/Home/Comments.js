import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Comments extends Component {
  state = {
    comment: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const props = this.props;
    return (
      <div className="comments">
        <div className="icons">
          <i
            onClick={() => props.onLikeClick(props.username)}
            className="fas fa-heart"
          />
          <i className="fas fa-comment" />
          <i className="fas fa-share" />
        </div>
        <h1>{props.likes} Likes</h1>

        {props.comments.map((comment, i) => (
          <div key={i} className="comments-section">
            <h1>{comment.username}</h1>
            <p>{comment.text}</p>
          </div>
        ))}

        <div className="comment-input">
          <form
            onSubmit={e =>
              props.onComment(e, props.username, "TEST", this.state.comment)
            }
          >
            <input
              id="comment"
              onChange={this.handleChange}
              name="comment"
              placeholder="Comment..."
            />
          </form>
        </div>
      </div>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  ),
  onLikeClick: PropTypes.func,
  postId: PropTypes.number
};

export default Comments;
