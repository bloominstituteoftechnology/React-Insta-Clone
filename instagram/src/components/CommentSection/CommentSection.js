import React from 'react'
import './CommentSection.css';

class CommentSection extends React.Component {

    render() {
        return (
            <div><p><span>{this.props.comment.username}</span> {this.props.comment.text}</p></div>
        )
    }
}

export default CommentSection;