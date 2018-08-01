import React, { Component } from 'react';
import './CommentSection.css';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }
    
    commentHandler = event => {
        this.setState({ comment: event.target.value });
    };

    addNewComment = (event) => {
        event.preventDefault();
        if (this.state.comment === "") {
            alert("You must provide a comment");
            return;
        }
        const newComment = { text: this.state.comment, username: "lfsalazarcruz" };
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, comment: "" });
    }
    
    render() {
        return (
            <div>
                {this.state.comments.map((comment, index) => <Comment key={index} comment ={comment} />)}
                <CommentInput 
                    comment={ this.state.comment }
                    submitComment={ this.addNewComment }
                    changeComment={ this.commentHandler }
                />
            </div>
        );
    }
}


export default CommentSection;