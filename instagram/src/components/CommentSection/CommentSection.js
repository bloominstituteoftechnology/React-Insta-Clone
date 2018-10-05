import React, { Component } from 'react';
import './CommentSection.css';

class CommentSection extends React.Component {
    render() {
        return (
            <div class='comment'>
                <span class='username'>{this.props.comment.username+' '}</span> 
                <span>{this.props.comment.text}</span>
            </div>
        )
    }
}

export default CommentSection;