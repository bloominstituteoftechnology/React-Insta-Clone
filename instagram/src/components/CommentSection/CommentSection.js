import React, { Component } from 'react';
import Comment from './Comment';
import AddComment from './AddComment';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: props.posts.comments,
            date: props.posts.timestamp,
            comment: ""
         }
    }

    handleCommentUpdate = (event) => {
        
        this.setState({comment: event.target.value})
    }

    addNewComment = (event) => {
        event.preventDefault();
        if (this.state.comment === ""){
            return null;
        }
        const newComment = {text: this.state.comment, username: localStorage.getItem("user")}
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({
            comments,
            comment:""
        })
    }



    render() { 
        return ( 
            <div>
                 {this.state.comments.map((comment, index) => 
                    <Comment
                        key={index}
                        name={comment.username}
                        comment={comment.text}
                    />
                )}
                
                <div>
                    {this.state.date}
                </div>
                <AddComment 
                    addNewComment={this.addNewComment}
                    value={this.state.comment}
                    handleCommentUpdate={this.handleCommentUpdate}
                />

            </div>
         );
    }
}
 
export default CommentSection;