import React from 'react';
import Comment from './Comment'
import './CommentSection.css';
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: "",
            placeholder: "add a comment..."
        }       
    }

    eventHandler = e => {
        console.log(e);
        this.setState ({comment : e.target.value});
    }

    addComment = e => {
        e.preventDefault();
        const comments = this.state.comments.slice();
        comments.push({text: this.state.comment, username: 'Username'});
        this.setState({comments, comment: ""});
    }

    render(){
    return (
        <div className = "commentsection">
            {this.state.comments.map (comment =>
             < Comment key = {Math.random()} comment = {comment} />
            )}
            <CommentInput 
            value = {this.state.comment}
            onChange = {this.eventHandler}
            addComment = {this.addComment}
            placeholdrer = {this.state.placeholder}
            />
        </div>
    )
}
}

export default CommentSection;