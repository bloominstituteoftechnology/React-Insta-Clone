import React, {Component} from 'react';
import uuidv4 from 'uuid/v4';
import Comment from '../Comment/Comment';
import './CommentSection.css';

class CommentSection extends Component {
  render() {
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

export default CommentSection;