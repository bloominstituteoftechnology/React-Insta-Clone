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

  componentDidMount() {
    this.setState({ comments: props.comments });
  }

  render() {
    return (
      <div>
        <div className="comment-section">
          {this.props.post.comments.map(comment => (
            <Comment comment={comment} key={Math.random()} />
          ))}
        </div>
        <CommentTimeStamp timestamp={this.props.post.timestamp} />
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
