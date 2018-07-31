import React, { Component } from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

class CommentSection extends Component {
  
    
    render() { 
        return ( 
            <div className="comment-section">
                <div className="username">{this.props.username}</div>
                <div className="text">{this.props.text}</div>
            </div>
         );
    }
}

CommentSection.propTypes = {
    comment: PropTypes.shape ({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}
 
export default CommentSection;