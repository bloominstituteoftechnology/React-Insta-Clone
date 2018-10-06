import React, { Component } from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

class Comment extends React.Component {
    render() {
        return (
            // commenter username and comment body
            <div className='comment'>
                <span className='username'>{this.props.comment.username+' '}</span> 
                <span>{this.props.comment.text}</span>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.text
    })
}

export default Comment;