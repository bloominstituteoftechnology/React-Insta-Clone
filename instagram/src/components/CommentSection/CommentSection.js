import React, { Component } from 'react';
import './CommentSection.css';
import Comment from './Comment';
import AddComment from './AddComment';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: "",
            date: "",
            newComment: "",
            username: "Das MA"
         }
    }

    handleCommentUpdate = (event) => {
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
                 
                    <Comment 
                        
                    />
               
                
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