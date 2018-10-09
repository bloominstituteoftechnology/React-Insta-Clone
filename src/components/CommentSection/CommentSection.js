import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

class CommentSection extends Component {
  
  render() {
    let commentKey = 1; 
    return (

      <div className="comment-section">
        {this.props.comments.map(comment => {
          return (
            <div key={this.props.ts + commentKey++} className="comment-item">
              <span className="comment-user">{comment.username}</span>
              <span className="comment-text">{comment.text}</span>
            </div>
          );
        })}
      </div>
      
    );
  }
}


CommentSection.propTypes = {
  ts: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};


export default CommentSection;
