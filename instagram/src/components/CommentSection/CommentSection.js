import React from 'react';
import Comment from './Comment.js';
import './CommentSection.css';
import Auth from '../Auth/Auth.js';

class CommentSection extends React.Component {
    constructor(props) {
        super(...arguments);
        this.state = {
            commentList: props.comments || [],
            lastActivity: this.props.lastActivity,
            commentBody: ''
        }
    }
    addComment = (submitEvent) => {
        submitEvent.preventDefault();
        let newCommentBody = this.state.commentBody;
        if(newCommentBody.length <= 0){ return;}
        let newComment = {
            username: Auth.userName,
            text: newCommentBody
        };
        this.setState({
            commentList: [...this.state.commentList, newComment],
            lastActivity: Date.now(),
            commentBody: ''
        })
    }
    typeComment = (changeEvent) => {
        let newValue = changeEvent.target.value;
        console.log(newValue)
        this.setState({
            commentBody: newValue
        });
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
                <form className="comments-add" onSubmit={this.addComment}>
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        onChange={this.typeComment}
                        value={this.state.commentBody}
                    />
                    <span className="comments-unknown-dots">...</span>
                </form>
            </div>
        )
    }
}

export default CommentSection;
