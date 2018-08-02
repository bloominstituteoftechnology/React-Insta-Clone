import React, { Component } from 'react';
import './CommentSection.css';
import Comment from './Comment';
import CommentInput from './CommentInput';
import PropTypes from "prop-types";

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
        //prevent refresh method from <form></form>
        event.preventDefault();
        if (this.state.comment === "") {
            alert("You must provide a comment");
            return;
        }
        const newComment = { text: this.state.comment, username: "lfsalazarcruz" };
        //slicing creates a shallow copy of comments state
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, comment: "" });
    }
    
    render() {
        return (
            <div>
                {this.state.comments.map((comment, index) => <Comment key={index} comment ={comment} />)}
                <div className="time-stamp">1 hour ago</div>
                <CommentInput 
                    comment={ this.state.comment }
                    submitComment={ this.addNewComment }
                    changeComment={ this.commentHandler }
                />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};

export default CommentSection;