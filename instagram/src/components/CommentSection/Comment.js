import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

class Comment extends Component {
    render() {
        return (
            <div className='user-comment-container'>
                <span className='username'>{this.props.comment.username}</span>
                <span className='comment-text'>{this.props.comment.text}</span>
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