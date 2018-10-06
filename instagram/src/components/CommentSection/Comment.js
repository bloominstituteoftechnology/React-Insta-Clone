import React, { Component } from 'react';
import './CommentSection.css';

class Comment extends React.Component {
    render() {
        return (
            <div className='comment'>
                <span className='username'>{this.props.comment.username+' '}</span> 
                <span>{this.props.comment.text}</span>
            </div>
        )
    }
}

export default Comment;