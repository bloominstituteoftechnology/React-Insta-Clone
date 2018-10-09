import React, { Component } from "react";
import PropTypes from "prop-types";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          username: "johndoe",
          text: this.state.newComment
        }
      ]
    });
  };
  handleChange = event => this.setState({ newComment: event.target.value });
  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>
              <span className="username" style={{marginRight: "5px"}}>{comment.username}</span>
              {comment.text}
            </p>
          </div>
        ))}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="comment"
            placeholder="Add a comment..."
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
