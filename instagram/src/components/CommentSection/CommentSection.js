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
            likes: this.props.likes,
            commentBody: ''
        }
    }
    addNewComment = (submitEvent) => {
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
    render() {
        return (
            <div className="comments">
                <div className="comments-interaction">
                    <img
                        src="img/interact-like.png"
                        alt="like button"
                        onClick={this.addLike}
                    />
                    <img src="img/interact-comment.png" alt="comment button" />
                    <div className="comments-likes-count">{this.state.likes} likes</div>
                </div>
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
                <form className="comments-add" onSubmit={this.addNewComment}>
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

    //--------------------------------------------
    typeComment = (changeEvent) => {
        let newValue = changeEvent.target.value;
        this.setState({
            commentBody: newValue
        });
    }
    addLike = (clickEvent) => {
        console.log("ASDF")
        this.setState(function(prevState, props){
            return {likes: prevState.likes+1}
        });
    }
}

export default CommentSection;
