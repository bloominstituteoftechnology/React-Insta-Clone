import React from 'react';
import Comment from './Comment.js';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(...arguments);
        this.state = {
            commentList: props.comments || [],
            lastActivity: this.props.lastActivity
        }
    }
    render() {
        return (
            <div className="comments">
                <div className="comments-list">
                {
                    this.state.commentList.map((comment, commentIndex) => (
                        <Comment
                            key={commentIndex}
                            username={comment.username}
                        >{comment.text}
                        </Comment>
                    ))
                }
                </div>
                <div className="post-time">{this.state.lastActivity}</div>
                <div className="comments-add">
                    <a>Add a comment...</a>
                    <span className="comments-unknown-dots">...</span>
                </div>
            </div>
        )
    }
}

export default CommentSection;
