import React from "react";
import Comment from "./Comment";
import "./CommentSection.css";
import PropTypes from "prop-types";
import CommentIcons from "./CommentIcons";
import CommentLikes from "./CommentLikes";
import CommentTimeStamp from "./CommentTimeStamp";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount(props) {
    this.setState({ comments: props.post.comments });
  }

  render() {
    return (
      <div>
        <div className="comment-container">
          <CommentIcons />
          <CommentLikes likes={this.props.post.likes} />
          <div className="comment-section">
            {this.props.post.comments.map(comment => (
              <Comment comment={comment} key={Math.random()} />
            ))}
          </div>
          <CommentTimeStamp timestamp={this.props.post.timestamp} />
        </div>
        <div className="add-comment-container">
          <input
            type="comment"
            class="form-control-lg add-comment-form"
            id="addComment"
            placeholder="Add a comment..."
          />
        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comment: PropTypes.object,
  timestamp: PropTypes.string,
  likes: PropTypes.number
};

export default CommentSection;
