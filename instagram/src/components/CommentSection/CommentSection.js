import React, { Component } from 'react';
import './CommentSection.css';

class CommentSection extends React.Component {
    render() {
        return (
            <div>
            <span>{this.props.comment.username}</span>
            <span>{this.props.comment.text}</span>
            </div>
        )
    }
}

export default CommentSection;