import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import Comment from '../Comment/Comment';
import './CommentSection.css';
class CommentSection extends Component {
  render() {
    console.log(this.props.comments);
    return (
      <div className="comment-section">
        {
          this.props.comments.map(comment => {
            return (
              <Comment key={uuidv4()} comment={comment} />
            )
          })
        }
      </div>
    )
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CommentSection;