import React, { Component } from 'react';
import './CommentSection.css';
import Comment from './Comment';
import AddComment from './AddComment';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: props.posts.comments,
            date: props.posts.timestamp,
            newComment: "",
            username: "Das MA"
         }
    }

    handleCommentUpdate = (event) => {
        event.preventDefault();
        this.setState({newComment: event.target.value})
    }

    addNewComment = (event) => {
        event.preventDefault();
        let comments = this.state.comments.slice();
        comments.push({
            username: this.state.username,
            text: this.state.newComment
        })
        this.setState({
            comments: comments,
            newComment: ""
        })
    }



    render() { 
        return ( 
            <div className="comment-container">
                 {this.state.comments.map(comment => 
                    <Comment 
                        name={comment.username}
                        comment={comment.text}
                    />
                )}
                
                <div className="timestamp">
                    {this.state.date}
                </div>
                <AddComment 
                    addNewComment={this.addNewComment}
                    value={this.state.newComment}
                    handleCommentUpdate={this.handleCommentUpdate}
                />

            </div>
         );
    }
}
 
export default CommentSection;