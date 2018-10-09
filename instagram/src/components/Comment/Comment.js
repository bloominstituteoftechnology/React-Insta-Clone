import React from "react";
import PropTypes from "prop-types";
import '../Comment/Comment.css';

class Comment extends React.Component {
  render() {
    return (
      <div className='commentItem'>
        <span className='boldName'>{this.props.comment.username}</span><span className='commentText'>{this.props.comment.text}</span>
      </div>
    );
  }
}

Comment.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      ).isRequired
    })
  ).isRequired
};

export default Comment;
