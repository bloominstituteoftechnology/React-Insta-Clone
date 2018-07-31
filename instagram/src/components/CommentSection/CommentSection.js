import React, { Component } from 'react';
import './CommentSection.css';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            newComment: '',
            newUsername: ''
        };
    }

    addNewComment = (event) => {
        event.preventDefault();
        const comments = this.state.comments.slice();
        comments.push({ username: this.state.newUsername, text: this.state.newComment });
        this.setState({ comments, newUsername: '', newComment: ''});
    }
    
    render() {
        return (
            <div>
                {this.state.comments.map((comment, index) => <Comment key={index} comment ={comment} />)}
                <CommentInput />
            </div>
        );
    }
}


export default CommentSection;