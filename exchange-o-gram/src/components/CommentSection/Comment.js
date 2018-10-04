import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

class Comment extends React.Component{
    render(){
        return(
            <div className="comment">
                <p><strong>{this.props.comment.username}</strong> {this.props.comment.text}</p>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }).isRequired
}

export default Comment;